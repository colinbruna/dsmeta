package com.brunas.dsmeta.services;

import com.brunas.dsmeta.entities.Sale;
import com.brunas.dsmeta.repositories.SaleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    private SaleRepository repository;

    public SaleService(SaleRepository repository) {
        this.repository = repository;
    }

    public List<Sale> findSales() {
        return repository.findAll();
    }
}
