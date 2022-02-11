import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { NodeService } from './nodeservice';
import { TreeNode } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-treeselect {
          width:20rem;
          display: inline-flex;
      }
  `,
  ],
  providers: [MessageService],
})
export class AppComponent {
  nodes1: any[];
  nodes2: any[];
  nodes3: any[];

  // selectedNodes1: any[] = [];
  selectedNodes1: TreeNode;
  selectedNodes2: any[] = [];
  selectedNode: any;

  myForm: FormGroup;

  constructor(public nodeService: NodeService, private fb: FormBuilder) {
    /* test reactive forms */
    this.myForm = this.fb.group({ 
      treeElement: '',
    });

    this.myForm.valueChanges.subscribe((data) => {
      console.log('log form: ', data);
      /* TODO: TEST CON LA KEY */
    });
  }

  ngOnInit() {
    // this.nodeService.getFiles().then((files) => (this.nodes1 = files));
    // this.nodeService.getFiles2().then((files) => (this.nodes1 = files));
    // this.nodeService.getMockFile().then((files) => (this.nodes1 = files));
    this.nodeService.getMockMarco().then((files) => (this.nodes1 = files));
    
    
    // this.nodeService.getMockSorted().then((files) => (this.nodes1 = files));

    //this.nodeService.getFiles().then((files) => (this.nodes2 = files));
    //this.nodeService.getFiles().then((files) => (this.nodes3 = files));
  }

  logData() {
    console.log('log selected: ', this.selectedNode);
    this.myForm.get('treeElement').patchValue(this.nodes1[1]); // OK
    console.log('aaa',this.nodes1);
  }

  onNodeSelected(elem: TreeNode) {
    console.log('*onNodeSelected - log elem*: ', elem); // OK !!!
  }
}
