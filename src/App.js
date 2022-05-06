
import React from "react";
import './App.css';
import {Container,Label, Row} from 'reactstrap';


class App extends React.Component{
  constructor(){
    super();
    this.state={schedule:""}  //we initialize variable schedule as empty, this variable will have the txt schedule content
    this.state={result:""}
  }

loadtxt=(e)=>{   // function to load and read txt schedule file
  
  e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {     
      const scheduletext = e.target.result;
      this.scheduleEmployes(scheduletext);
    };
    reader.readAsText(e.target.files[0]);
  
}
scheduleEmployes=(scheduletext)=>{ //function to make array from schedule emplyes txt
  const EmployesscheduleAsArray= scheduletext.split(/\r?\n/) // array with schedule employes elements
  this.employesMatrix(EmployesscheduleAsArray)
  this.setState({schedule:scheduletext})

}

employesMatrix=(EmployesscheduleAsArray)=>{
  const employeScheduleMatrix=[];
  for (var employeScheduleIte=0;employeScheduleIte<(EmployesscheduleAsArray.length)-1;employeScheduleIte++){ //array structure of employes and their schedules
    employeScheduleMatrix.push(EmployesscheduleAsArray[employeScheduleIte].split('=').join(',').split(','))    
  }
  for (var employeIteration=0;employeIteration<employeScheduleMatrix.length;employeIteration++){
    for (var scheduleIter=employeIteration+1;scheduleIter<employeScheduleMatrix.length;scheduleIter++){
      this.getCoincidences(employeScheduleMatrix[employeIteration],employeScheduleMatrix[scheduleIter])

    }
  }
}

getCoincidences=(employeMatrixA,employeMatrixB)=>{  
  
  var scheduleCoincidences=0;
  
  for (var i in employeMatrixA){
    for (var j in employeMatrixB){
      const dayEmployeA=employeMatrixA[i].substring(0,2)
      const dayEmployeB=employeMatrixB[j].substring(0,2)
      if (dayEmployeA==dayEmployeB){
        const InHA=employeMatrixA[i].substring(2,7);
        const InHB=employeMatrixB[j].substring(2,7);
        const OutHA=employeMatrixA[i].substring(8,13);
        const OutHB=employeMatrixB[j].substring(8,13);
        if (InHA <= OutHB && InHB<=InHA || InHB <= OutHA && InHA<=InHB ) {
          scheduleCoincidences+=1;
        } 
      }
    }
  }
  this.setState(prevState=>({result:prevState.result.concat(employeMatrixA[0]+"-"+employeMatrixB[0]+": "+scheduleCoincidences)}))

 
}


  render(){
    return (
      <Container className="App">
        <h1>EXERCISE MERCHAN</h1>
        <Row>
         <Label>For check coincidences please upload the txt file of eployes schedule</Label>
        </Row>
        <Row>
          <input type="file" onChange={(e)=>this.loadtxt(e)}/>
        </Row>
        <Label>SCHEDULE OF EMPLOYES</Label>
        <Label>{this.state.schedule}</Label>
        <Row>
          <h1>SCHEDULE COINCIDENCES</h1>
        </Row>
        <Row>
          <Label>{this.state.result}</Label>
        </Row>
    
      </Container>
    );

  }
  
}

export default App;
