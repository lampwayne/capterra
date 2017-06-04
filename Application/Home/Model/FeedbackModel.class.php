<?php
/**
 * 评论模型类
 * User: wangyongqiang
 * Date: 2017/6/3 18:41
 */
namespace Home\Model;
use Think\Model;
class FeedbackModel extends Model{
    /**
     * 获取评论列表
     * @param  integer  $category 分类ID
     * @param  string   $order    排序规则
     * @param  integer  $status   状态
     * @param  boolean  $count    是否返回总数
     * @param  string   $field    字段 true-所有字段
     * @return array              文档列表
     */
    public function lists($detail_id, $order = '`id` DESC', $status = 1, $field = true){
        $map = array();
        $map['detail_id'] = intval($detail_id);
        $map['status'] = intval($status);

        return $this->field($field)->where($map)->order($order)->select();
    }

    /**
     * 推荐评论
     * @param int $limit
     * @param string $order
     * @param bool $field
     * @return mixed
     */
    public function recommend($limit = 3, $order = '`id` DESC', $field = true){
        $map = array();
        $map['status'] = 1;

        return $this->field($field)->where($map)->order($order)->limit($limit)->select();
    }
}