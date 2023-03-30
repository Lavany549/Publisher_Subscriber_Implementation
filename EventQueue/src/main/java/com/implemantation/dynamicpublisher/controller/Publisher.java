package com.implemantation.dynamicpublisher.controller;

import com.implemantation.dynamicpublisher.Service.DBrepo;
import com.implemantation.dynamicpublisher.dto.DbItem;
import com.implemantation.dynamicpublisher.dto.RequestMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/api")
public class Publisher {

    private final Object $lock = new Object[0];

    @Autowired
    private DBrepo repo;
    @Autowired
    private KafkaTemplate<String,RequestMessage> kafkaTemplate;
    @PostMapping("/publish")
    public ResponseEntity<String> publishMessage(@RequestBody RequestMessage requestMessage){

        System.out.println("Message Before Sending ->\n"+requestMessage);

        synchronized ($lock) {
            repo.save(new DbItem(requestMessage.getTopic_id(),requestMessage.getMsg()));
            System.out.println("Successfully added to Database");
            kafkaTemplate.send(requestMessage.getTopic_id(), requestMessage);
        }

        return ResponseEntity.ok("Message Published Successfully");
    }
}
