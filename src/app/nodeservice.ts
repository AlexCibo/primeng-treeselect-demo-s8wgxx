import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    getFiles() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getLazyFiles() {
    return this.http.get<any>('assets/files-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getFiles2() {
    return this.http.get<any>('assets/files2.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getMockFile(){
      return this.http.get<any>('assets/filesMock.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getMockMarco(){
      return this.http.get<any>('assets/marcoMock.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getMockSorted(){
      return this.http.get<any>('assets/finalMockSorted.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
}