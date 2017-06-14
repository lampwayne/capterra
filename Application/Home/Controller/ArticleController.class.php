<?php
/**
 * 文档模型控制器
 * 文档模型列表和详情
 */
namespace Home\Controller;
class ArticleController extends HomeController {
    private $_software_pid = 39;
    
    /**
     * 分类列表页
     */
    public function catelist(){
        $model = D('Category');

        $map = array('pid'=>$this->_software_pid);
        if(I('get.keyword', '', 'trim')){
            $keyword = I('get.keyword', '', 'trim');
            $map['name|title'] = $keyword;

            $this->assign('keyword', $keyword);
        }

        $res = $model->getCateListMap($map);
        $catelist = $numcatelist = array();
        if($res){
            $hotTotal = 0;
            foreach ($res as $v){
                $cKey = strtoupper(substr($v['name'], 0, 1));
                if(is_numeric($cKey)){
                    $numcatelist[] = $v;
                    continue;
                }else{
                    //分类加首字母索引
                    $catelist[$cKey][] = $v;
                }
            }

            ksort($catelist);
        }

        $this->assign('catelist', $catelist);
        $this->assign('numcatelist', $numcatelist);

        //热门分类
        $hotlist = $model->getHot($this->_software_pid);
        $this->assign('hotlist', $hotlist);

        $this->display();
    }

    /* 文档模型频道页 */
	public function index(){
		/* 分类信息 */
		$category = $this->category();

		//频道页只显示模板，默认不读取任何内容
		//内容可以通过模板标签自行定制

		/* 模板赋值并渲染模板 */
		$this->assign('category', $category);
		$this->display($category['template_index']);
	}

	/* 文档模型列表页 */
	public function lists($p = 1){
		/* 分类信息 */
		$category = $this->category();
        $list = $this->getlists($category['id']);

		/* 模板赋值并渲染模板 */
		$this->assign('category', $category);
		$this->assign('lists', $list);

		//相关分类
        $id = I('get.category', 0);
        $id = $id ? $id : 0;

        $map = array();
        $map['pid'] = $this->_software_pid;
        $map['id']  = array('neq', $id);
        $relatedCates = D('Category')->where($map)->limit(5)->select();
        $this->assign('relatedCates', $relatedCates);

		$this->display($category['template_lists']);
	}

	/* 文档模型详情页 */
	public function detail($id = 0, $p = 1){
		/* 标识正确性检测 */
		if(!($id && is_numeric($id))){
			$this->error('文档ID错误！');
		}

		/* 页码检测 */
		$p = intval($p);
		$p = empty($p) ? 1 : $p;

		/* 获取详细信息 */
		$Document = D('Document');
		$info = $Document->detail($id);
		if(!$info){
			$this->error($Document->getError());
		}

		/* 分类信息 */
		$category = $this->category($info['category_id']);

		/* 获取模板 */
		if(!empty($info['template'])){//已定制模板
			$tmpl = $info['template'];
		} elseif (!empty($category['template_detail'])){ //分类已定制模板
			$tmpl = $category['template_detail'];
		} else { //使用默认模板
			$tmpl = 'Article/'. get_document_model($info['model_id'],'name') .'/detail';
		}

		/* 更新浏览数 */
		$map = array('id' => $id);
		$Document->where($map)->setInc('view');

		/* 模板赋值并渲染模板 */
		$this->assign('category', $category);
		$this->assign('info', $info);
		$this->assign('page', $p); //页码Article/article/detail

        //获取评论列表
        $reviewModel = D('review');
        $reviewList = $reviewModel->where(array('id' => $id))->select();
        $this->assign('reviewList', $reviewList);

		$this->display($tmpl);
	}

    /* 获取当前分类文档列表 */
	private function getlists($category){
	    $review_stars = I('get.review_stars');//应用评分
	    $users = I('get.users');//用户数
	    $platformArr = I('get.platform');//安装方式
        $featureArr = I('get.feature');//功能

        $Document = D('Document');

        $map = array('category_id'=>$category);
        if($review_stars) $map['review_stars'] = array('egt', $review_stars);
        if($users) $map['view'] = array('egt', $users);
        if($platformArr) $map['platform'] = array('in', $platformArr);
        if($featureArr) $map['feature'] = array('in', $featureArr);

        $list = $Document->where($map)->select($category['id']);
        if(false === $list){
            $this->error('获取列表数据失败！');
        }

        return $list;
    }

	/* 文档分类检测 */
	private function category($id = 0){
		/* 标识正确性检测 */
		$id = $id ? $id : I('get.category', 0);

		/* 获取分类信息 */
		$model = D('Category');
        $category = $model->info($id);
        if($category && 1 == $category['status']){
            switch ($category['display']) {
                case 0:
                    $this->error('该分类禁止显示！');
                    break;
                //TODO: 更多分类显示状态判断
                default:
                    return $category;
            }
        } else {
            $this->error('分类不存在或被禁用！');
        }
	}

}
