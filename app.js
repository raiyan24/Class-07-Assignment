//Create a Student Array & Object Data Structure with 30 Students

const studentInfo = [
    {
        name : 'Tawseef',
        roll : 1,
        age : 5,
        class : 'One',
        gender : 'Male',
        location : 'Dhaka',
        admissionFees : 1200
    },
    {
        name : 'Raisa',
        roll : 2,
        age : 8,
        class : 'One',
        gender : 'Female',
        location : 'Dhaka',
        admissionFees : 1000
    },
    {
        name : 'Anisha',
        roll : 3,
        age : 7,
        class : 'One',
        gender : 'Female',
        location : 'Dhaka',
        admissionFees : 1950
    },
    {
        name : 'Ayan',
        roll : 4,
        age : 9,
        class : 'One',
        gender : 'Male',
        location : 'Khulna',
        admissionFees : 800
    },
    {
        name : 'Sameeha',
        roll : 5,
        age : 7,
        class : 'One',
        gender : 'Female',
        location : 'Chittagong',
        admissionFees : 500
    },
    {
        name : 'Abdur',
        roll : 6,
        age : 9,
        class : 'One',
        gender : 'Male',
        location : 'Khulna',
        admissionFees : 750
    },
    {
        name : 'Rounok',
        roll : 7,
        age : 8,
        class : 'One',
        gender : 'Male',
        location : 'Chittagong',
        admissionFees : 850
    },
    {
        name : 'Emran',
        roll : 1,
        age : 8,
        class : 'Two',
        gender : 'Male',
        location : 'Rangpur',
        admissionFees : 2000
    },
    {
        name : 'Sheikh',
        roll : 2,
        age : 9,
        class : 'Two',
        gender : 'Male',
        location : 'Rajshahi',
        admissionFees : 1500
    },
    {
        name : 'Moushumi',
        roll : 3,
        age : 8,
        class : 'Two',
        gender : 'Female',
        location : 'Khulna',
        admissionFees : 1200
    },
    {
        name : 'Raiyan',
        roll : 4,
        age : 19,
        class : 'Two',
        gender : 'Male',
        location : 'Sylhet',
        admissionFees : 1400
    },
    {
        name : 'Oritree',
        roll : 5,
        age : 9,
        class : 'Two',
        gender : 'Female',
        location : 'Sylhet',
        admissionFees : 1400
    },
    {
        name : 'Ferdous',
        roll : 6,
        age : 16,
        class : 'Two',
        gender : 'Female',
        location : 'Dhaka',
        admissionFees : 1200
    },
    {
        name : 'Nujhat',
        roll : 7,
        age : 18,
        class : 'Two',
        gender : 'Female',
        location : 'Dhaka',
        admissionFees : 13000
    },
    {
        name : 'Rahim',
        roll : 1,
        age : 20,
        class : 'Three',
        gender : 'Male',
        location : 'Borishal',
        admissionFees : 1250
    },
    {
        name : 'Jahan',
        roll : 2,
        age : 16,
        class : 'Three',
        gender : 'Female',
        location : 'Rangpur',
        admissionFees : 1350
    },
    {
        name : 'Tasneem',
        roll : 3,
        age : 17,
        class : 'Three',
        gender : 'Female',
        location : 'Dhaka',
        admissionFees : 1600
    },
    {
        name : 'Hasan',
        roll : 4,
        age : 26,
        class : 'Three',
        gender : 'Male',
        location : 'Dhaka',
        admissionFees : 550
    },
    {
        name : 'Ershad',
        roll : 5,
        age : 18,
        class : 'Three',
        gender : 'Male',
        location : 'Dhaka',
        admissionFees : 650
    },
    {
        name : 'Rijan',
        roll : 6,
        age : 21,
        class : 'Three',
        gender : 'Male',
        location : 'Barishal',
        admissionFees : 750
    },
    {
        name : 'Sheela',
        roll : 7,
        age : 20,
        class : 'Three',
        gender : 'Female',
        location : 'Dhaka',
        admissionFees : 650
    },
    {
        name : 'Bina',
        roll : 1,
        age : 20,
        class : 'Four',
        gender : 'Female',
        location : 'Rangpur',
        admissionFees : 2500
    },
    {
        name : 'Parul',
        roll : 2,
        age : 24,
        class : 'Four',
        gender : 'Female',
        location : 'Dhaka',
        admissionFees : 2530
    },
    {
        name : 'Ali',
        roll : 3,
        age : 16,
        class : 'Four',
        gender : 'Male',
        location : 'Rangpur',
        admissionFees : 850
    },
    {
        name : 'Shaheb',
        roll : 4,
        age : 20,
        class : 'Four',
        gender : 'Male',
        location : 'Dhaka',
        admissionFees : 2050
    },
    {
        name : 'Nayeb',
        roll : 5,
        age : 21,
        class : 'Four',
        gender : 'Male',
        location : 'Borishal',
        admissionFees : 2950
    },
    {
        name : 'Rizan',
        roll : 6,
        age : 23,
        class : 'Four',
        gender : 'Male',
        location : 'Dhaka',
        admissionFees : 3150
    },
    {
        name : 'Shefali',
        roll : 7,
        age : 22,
        class : 'Four',
        gender : 'Female',
        location : 'Rajshahi',
        admissionFees : 3150
    },
    {
        name : 'Fatema',
        roll : 8,
        age : 21,
        class : 'Four',
        gender : 'Female',
        location : 'Rangpur',
        admissionFees : 1150
    },
    {
        name : 'Rasel',
        roll : 9,
        age : 22,
        class : 'Four',
        gender : 'Male',
        location : 'Dhaka',
        admissionFees : 2050
    },
]

/**
 * Assignment 01: Total Admnission fees
 */

let totalAdmissionFees = 0;
let currencyName = 'BDT'

for( data of studentInfo ){
    console.log(`Name : ${data.name}, Admission Fees : ${data.admissionFees}`);
    totalAdmissionFees += data.admissionFees;
 }
 console.log(`====================================
    Total Admission Fees : ${totalAdmissionFees} ${currencyName}`);

 /**
  * Assignment 02 : Find All Female Students
  */

// console.log(`List of Female Students
// ===================================`);

// for( index in studentInfo ){
//     if( studentInfo[index].gender === 'Female' ){
//         console.log(`${index}. Name : ${studentInfo[index].name}, Gender : ${studentInfo[index].gender}`);
//     }
//  }
 
 /**
  * Assignment 03 : Find class wise student result
  */
 
//  console.log(`All Student of Class : One
// ===============================`);
 
// for( data of studentInfo ){
//     if( data.class === 'One'){
//         console.log(`Name : ${data.name}, Class: ${data.class}`);
//     }
// }
 
 /**
  * Assignment 04 : - Location wise student result
  */
 
// console.log(`Find All Students Lives in : Dhaka
// ===================================`);
//  for ( index in studentInfo ){
//     if(studentInfo[index].location === 'Dhaka' ){
//         console.log(`${Number(index) +1 }. ${studentInfo[index].name}, Location : ${studentInfo[index].location}`);
//     }
//  }
 
 /**
  * Assignment 05 : find student between 10 - 25 age
  */
 
//   console.log(`Find All Students between 10 - 25 age
//  =====================================`);
//  studentInfo.map( (data, index) => {
//     if( data.age >= 10 && data.age <= 25 ){
//         console.log(`${index + 1}. Name : ${data.name}, Age: ${data.age}`);
//     }
//  })



