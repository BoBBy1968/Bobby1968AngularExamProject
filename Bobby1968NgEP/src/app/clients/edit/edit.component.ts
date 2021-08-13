import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  client: IClient | undefined;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getClient();
   }

  ngOnInit(): void {
  }

  edit(form: NgForm){
    //TODO: here comes the code that sends changes to content Service
  }

  getClient(){
    //TODO: here comes the code fetching the client
    this.client = undefined;
    const id = this.activatedRoute.snapshot.params.objectId;
    this.clientService.getClient(id).subscribe(client => this.client = client);
    
  }

}
