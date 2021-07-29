 class Company{
     constructor(){
         this.departments = new Map();
     }
         
         static employee = class Employee{
             constructor(username,salary,position){
                 this.username = username;
                 this.salary = salary;
                 this.position = position;
                }
                get username(){
                    return this._username;
                }
                set(value){
                    this._isValidate(value);
                    this._username = value;
                }
                get salary(){
                    return this._salary;
                }
                set(value){
                    this._isValidate(value);
                    if(salary<=0){
                        throw new Error("Invalid input!");
                    }
                    this._salary = value;
                }
                get position(){
                    return this._position;
                }
                set(value){
                    this._isValidate(value);
                    this._position = value;
                }
                addEmployee(username,salary,position,department){
                    if(this._username === ""|| this._salary ===undefined || this.position===null){
                        throw new Error("Invalid input!");
                    }
                    if(!this.departments.has(department)){
                        this.departments.set(department,[]);
                    }
                    let employee = new Company.Employee(username,salary,position);
                        let workers = this.departments.get(department);
                        workers.push(employee);
                        return `New employee is hired. Name: ${username}. Position: ${position}`;
                }
               
                bestDepartment(){
                    let sorted = [...this.departments]
                    .sort(([aName,aWorker],[bName,bWorker])=>{
                        let aaverageSalary = this._getAverageSalary(aName);
                        let baverageSalary = this._getAverageSalary(bName);
                    return baverageSalary - aaverageSalary;
                });
                let[bestDepartmentName,bestDepartmentWorkers] = sorted[0];
                bestDepartmentWorkers.sort((a,b)=>b.salary - a.salary);

                bestDepartmentString = `"Best Department is: ${bestDepartmentName}
                Average salary: ${this._getAverageSalary(bestDepartmentName).toFixed(2)}`;
                let workersString = 

            }


               _getAverageSalary(departmentName){
                   let departmentWorkers = this.departments.get(departmentName);
                let averageSalary = departmentWorkers.reduce((a,c)=>acc + c.salary,0) / departmentWorkers.length;
                return averageSalary;
               }
                _isValidate(){
                    if(this._username === ""|| this._salary ===undefined || this.position===null){
                        throw new Error("Invalid input!");
                    }
                }
            }
        
    }

