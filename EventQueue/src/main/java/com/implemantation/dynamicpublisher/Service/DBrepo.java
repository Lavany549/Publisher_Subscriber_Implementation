package com.implemantation.dynamicpublisher.Service;

import com.implemantation.dynamicpublisher.dto.DbItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DBrepo extends MongoRepository<DbItem,String> {

}
