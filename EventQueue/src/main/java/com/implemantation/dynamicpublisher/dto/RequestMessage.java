package com.implemantation.dynamicpublisher.dto;

public class RequestMessage {
    private String topic_id;
    private String msg;

    public String getTopic_id() {
        return topic_id;
    }

    public void setTopic_id(String topic_id) {
        this.topic_id = topic_id;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "RequestMessage{" +
                "topic_id='" + topic_id + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }
}
