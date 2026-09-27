import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "../cliente";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndoPoint: string = 'http://localhost:5000/api/clientes';

  constructor(private http: HttpClient){}
}

getCliente(): Observable<Cliente[]> {
  console.log("Listando clientes desde el servicio");
  return this.http.get<Cliente[]>(this.urlEndPoint);
}

create(Cliente: Cliente): Observable<Cliente> {
    console.log("Creando desde el servico")
}