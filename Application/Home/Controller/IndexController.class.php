<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Home\Controller;
use OT\DataDictionary;

/**
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class IndexController extends HomeController {
    private $_software_pid = 39;

	//系统首页
    public function index(){
        $search = I('search', '', 'trim');

        if($search){
            $this->assign('search',$search);//关键词

            //查找分类
            $map = array('pid'=>$this->_software_pid);
            $map['name|title'] = array('like', "%{$search}%");
            $category   = D('Category')->getCateListMap($map);

            $this->assign('total',count($category));//栏目
            $this->assign('category',$category);//栏目

            //查找文档
            $where = array();
            $where['name|title'] = array('like', "%{$search}%");
            $doclist   = D('Document')->getDocListMap($where);

            $this->assign('doctotal',count($doclist));//栏目
            $this->assign('doclist',$doclist);//栏目

            $this->display('search');
        }else{
            $map = array('pid'=>$this->_software_pid);
            $category   = D('Category')->getCateListMap($map);
            $feedbacks  = D('Feedback')->recommend();

            $this->assign('category',$category);//栏目
            $this->assign('feedback',$feedbacks);//评论列表

            $this->display();
        }
    }
}