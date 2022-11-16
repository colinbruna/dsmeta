package com.brunas.dsmeta.controllers;

import com.brunas.dsmeta.entities.Sale;
import com.brunas.dsmeta.services.SaleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
    
    private final SaleService service;

    public SaleController(SaleService service) {
        this.service = service;
    }

    @GetMapping
    public List<Sale> findSales() {
        return service.findSales();
    }
}
