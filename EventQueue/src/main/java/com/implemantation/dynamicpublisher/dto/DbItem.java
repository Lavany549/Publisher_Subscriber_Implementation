package com.implemantation.dynamicpublisher.dto;

import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Document(collection = "requestsData")
public class DbItem {

    private String topic_id;
    private String msg;
    private String date;
    public DbItem(String topic_id, String msg) {
        this.topic_id = topic_id;
        this.msg = msg;
        this.date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }

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
}
