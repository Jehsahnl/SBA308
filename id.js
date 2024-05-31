const learnerSubmission = 
        [{learner_id: 125, 
       assignment_id: 1, 
       submission: {
        submitted_at: "2023-01-25", 
       score: 47}},

       {learner_id: 132, 
        assignment_id: 1, 
        submission: {
         submitted_at: "2023-01-24", 
        score: 39}}
    ]

    const assignmentInfo = [{
        id: 1, 
        name: "Declare a Variable", 
          // the due date for the assignment
        due_at: "2023-01-25", 
          // the maximum points possible for the assignment
        pointsPossible: 50}]
       
       
        // This function looks for the id within each object of the learner submission array
        function IDs(){
            for(i = 0; i < learnerSubmission.length; i++){
                console.log(learnerSubmission[i].learner_id )
            
            }
        }
        
        IDs()
        
        