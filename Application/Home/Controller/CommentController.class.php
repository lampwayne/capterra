<?php
/**
 * 评论相关控制器
 * User: wangyongqiang
 * Date: 2017/6/3 15:46
 */
namespace Home\Controller;
class CommentController extends HomeController{
    /**
     * 热门软件评论
     */
    public function popular(){
        $this->display();
    }

    /**
     * 评论
     */
    public function pinglun(){
        if(IS_POST){
            $dataArr = I('post.review');

            $data = array();
            $data['product_id'] = $dataArr['product_id'];
            $data['vendor_id'] = $dataArr['vendor_id'];
            $data['vendor_initiated_p'] = $dataArr['vendor_initiated_p'];

            $data['rating_overall'] = $dataArr['rating_overall'];
            $data['rating_ease_of_use'] = $dataArr['rating_ease_of_use'];
            $data['rating_features'] = $dataArr['rating_features'];
            $data['rating_customer_support'] = $dataArr['rating_customer_support'];
            $data['rating_value'] = $dataArr['rating_value'];

            $data['review_title'] = $dataArr['review_title'];
            $data['like_most'] = $dataArr['like_most'];
            $data['like_least'] = $dataArr['like_least'];
            $data['time_used'] = $dataArr['time_used'];
            $data['frequency_used'] = $dataArr['frequency_used'];
            $data['role'] = $dataArr['role'];

            $data['username'] = $dataArr['username'];
            $data['mobile'] = $dataArr['mobile'];
            $data['email'] = $dataArr['email'];
            $data['title'] = $dataArr['title'];
            $data['company'] = $dataArr['company'];

            $flag = M('review')->add($data);
            if($flag){
                $this->success('评论成功', U('Article/detail', array('id'=>$dataArr['product_id'])));
                exit;
            }else{
                $this->success('评论失败');
                exit;
            }
        }else{
            $detail_id = I('detail_id', '', 'intval');
            $this->assign('detail_id', $detail_id);
        }

        $this->display();
    }

    /**
     * 体验
     */
    public function tiyan(){
        $this->display();
    }

    /**
     * 评论发送
     */
    public function fasong(){
        $this->display();
    }
}