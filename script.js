const data = [
    { name: "Jailer", age: 24, profession: "developer" },
    { name: "Kabali", age: 27, profession: "admin" },
    { name: "bigil", age: 22, profession: "football" },
    { name: "john", age: 21, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            console.log("Name : "+ element.name)
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    let nam= window.prompt('Enter developer name');
    let ag=window.prompt('Enter age')
    let prof=window.prompt('Enter Profession')
    
    let obj= {name:nam, age:ag, profession:prof}

    data.push(obj);

  }
  
  // 3. Remove Admins
  function removeAdmin() {
 for (let index = 0; index < data.length; index++) {
     const element = data[index];
     if(element.profession=='admin'){
        data.splice(index, index);
        console.log(element.name+" got deleted")
     }
 }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const arr1=['Aadhiran', 'Yugesh']
    const arr2=['Kandhaswamy', 'KarunaNidhi']

    const res=arr1.concat(arr2)
    console.log("Array 1=> "+ arr1)
    console.log("Array 2=> "+arr2)
    console.log(res);
  }
  
  // 5. Average Age
  function averageAge() {
    const ages=[];
    let sum=0;
    let count=0;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        ages.push(element.age);
        sum+=ages.pop()
        count++;
    }
    console.log("Average age of people is => "+sum/count);

  }
  
  // 6. Age Check
  function checkAgeAbove25() {
   let ans=  data.some((ele)=>{
        return ele.age > 25;
    })
    if(ans){
        console.log('Yes there are people older than 25')
    }else{
        console.log('No there are no people older than 25')
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const ans=[]
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(!ans.includes(element.profession)){
            ans.push(element.profession)
        }
    }
    console.log('unique Professions')
    console.log(ans)
  }
  
  // 8. Sort by Age
  function sortByAge() {
   function compare(a, b){
        return a.age-b.age;
   }
   data.sort(compare);

   for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element)
    
   }
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(element.name=='john'){
            element.profession='Manager';
            console.log(element)
        }

    }
    
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let dev=0, ad=0;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(element.profession=='admin'){
            ad++;
        }
        if(element.profession=='developer'){
            dev++;
        }
    }

    console.log("Number of Admins=> "+ ad);
    console.log("Number of Developers=> "+ dev);
  }