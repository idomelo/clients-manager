package com.idomelo.clients.controller;

import java.util.List;

import com.idomelo.clients.model.Client;
import com.idomelo.clients.repository.ClientRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/clients")
public class ClientsController {
	
	private ClientRepository clientRepository;
	
	public ClientsController(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}
	
	
	@GetMapping
	public List<Client> list() {
		return clientRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Client> create(@RequestBody Client client) {
		try {
			Client c = new Client();
			c.setName(client.getName());
			c.setPriority(client.getPriority());
			
			
			Client _client = clientRepository.save(c);
			
			return new ResponseEntity<>(_client, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		try {
			clientRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
}

