let arr=["coding","studying","exercising"];
while (true){
    console.log("1. Add stuff");
    console.log("2. Remove stuff");
    console.log("3. Display stuff")
    console.log("4. Exit");
    let choice=prompt("Enter your choice (1-4):");
    if (choice==1){
        let todo=prompt("enter the thing u wanna do");
        arr.push(todo);
        console.log("element added");
    }
    else if (choice==2){
        let toremove=prompt("Enter which task number you want to remove");
        arr.pop(toremove);
        console.log("task removed");       
    }
    else if (choice==3){
        for (let i=0;i<arr.length;i++){
            console.log("task: ",i+1,":",arr[i]);
        }
    }
    else if(choice==4){
        console.log("Goodbye");
        break;
    }
    else{
        console.log("Invalid choice, please try again.");
    }
}