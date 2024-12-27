const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');



/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

  rootNode = new Node(null);
  
  root() {

    return this.rootNode;
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  add(dat) {

    newNode = new Node(dat);
    currentNode = this.root();

    while(1){
      if(newNode.data>currentNode.data){
        if(currentNode.left){
          currentNode = currentNode.left;
        }else {
          currentNode.left = newNode;
          break;
        }
      }else{
        if(currentNode.right){
          currentNode = currentNode.right;
        }else {
          currentNode.right = newNode;
          break;
        }
      }
    }


    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  has(dat) {

    currentNode = this.root();

    while(1){
      if(dat>currentNode.data){
        if(currentNode.left){
          currentNode = currentNode.left;
        }else {
          return false;
        }
      }else{
        if(dat=currentNode.data){
          return true;
        }
        else if(currentNode.right){
          currentNode = currentNode.right;
        }else {
          return false;
        }
      }
    }
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(dat) {

    currentNode = this.root();

    while(1){
      if(dat>currentNode.data){
        if(currentNode.left){
          currentNode = currentNode.left;
        }else {
          return null;
        }
      }else{
        if(dat=currentNode.data){
          return currentNode;
        }
        else if(currentNode.right){
          currentNode = currentNode.right;
        }else {
          return null;
        }
      }
    }
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(dat) {

    delNode = this.find(dat);
    lNode = delNode.left;
    rNode = delNode.right;

    delNode.left = null;
    delNode.riht = null;
    delNode = null;

    currentNode = this.root();
    while(1){
      if(lNode.data>currentNode.data){
        if(currentNode.left){
          currentNode = currentNode.left;
        }else {
          currentNode.left = lNode;
          break;
        }
      }else{
        if(currentNode.right){
          currentNode = currentNode.right;
        }else {
          currentNode.right = lNode;
          break;
        }
      }
    }

    currentNode = this.root();
    while(1){
      if(rNode.data>currentNode.data){
        if(currentNode.left){
          currentNode = currentNode.left;
        }else {
          currentNode.left = rNode;
          break;
        }
      }else{
        if(currentNode.right){
          currentNode = currentNode.right;
        }else {
          currentNode.right = rNode;
          break;
        }
      }
    }

    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {

    currentNode = this.root();

    while(currentNode.right){
      currentNode = currentNode.right;
    }

    return currentNode.data;

    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    currentNode = this.root();

    while(currentNode.left){
      currentNode = currentNode.left;
    }

    return currentNode.data;

    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};
