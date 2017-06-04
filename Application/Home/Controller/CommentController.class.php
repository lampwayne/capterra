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
            $data = array();
            $data[''] = '';
            $data[''] = '';
            $data[''] = '';
            $data[''] = '';

            $flag = D('')->add();
            if($flag){

            }else{
                //
            }

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