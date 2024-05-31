const assignmentInfo = [{id: 1, 
    name: "Declare a Variable", 
      // the due date for the assignment
    due_at: "2023-01-25", 
      // the maximum points possible for the assignment
    pointsPossible: 50},
    {id: 2, 
        name: "Write a Function", 
          // the due date for the assignment
        due_at: "2023-02-27", 
          // the maximum points possible for the assignment
        pointsPossible: 150},
    {id: 3, 
        name: "Code the World", 
            // the due date for the assignment
        due_at: "3156-11-15", 
            // the maximum points possible for the assignment
        pointsPossible: 500}]

        const courseInfo = { id: 451,
            name: "Introduction to JavaScript"
        }
        
        const assignmentGroup = {
        id: 12345, 
        name: "Fundamentals of JavaScript", 
          // the ID of the course the assignment group belongs to
        course_id: 451, 
          // the percentage weight of the entire assignment group
        groupWeight: 25, 
        assignments: ["assignmentInfo"]
        }
        
        const learnerSubmission = [
            {learner_id: 125, 
           assignment_id: 1, 
           submission: {
            submitted_at: "2023-01-25", 
           score: 47}},
            
           {learner_id: 125, 
            assignment_id: 2, 
            submission: {
             submitted_at: "2023-02-12", 
            score: 150}},
            
            {learner_id: 125, 
                assignment_id: 3, 
                submission: {
                 submitted_at: "2023-01-25", 
                score: 400}},
        
                {learner_id: 132, 
                    assignment_id: 1, 
                    submission: {
                     submitted_at: "2023-01-24", 
                    score: 39}},
        
                    {learner_id: 132, 
                        assignment_id: 2, 
                        submission: {
                         submitted_at: "2023-03-07", 
                        score: 140}}
        ]

        /* for part 2, once we figure out how to move on, we need just need to add the other student's scores to get their average. So in short, here's how we should do this
 * we need to tell the code to:
 *  -  identify the id of the learner
 *  - then if the id matches the previous object, add that score to total (so return the score each iteration (i think))
 *  - if the id does NOT match (anymore), then take that total and cahche it (return somewhere so that you can divde it by the assignments, which we we'll be doing the same thing for)
 *  - once the first cycle is complete and you you've gotten all the files for the first learner, move onto the next by incrementing, and then repeat the process until you've acquired all relevant data
 */
// had this working on the number of outputs, but not the correct output
        function IDs(){
            //first for loop tells js to increment objects in the assgnment array
            for(j = 0; j < assignmentInfo.length ; j++ ){
                // second loop tells js to increment through learner submissions
                for(i = 0; i < learnerSubmission.length; i++){
                    console.log(learnerSubmission[i].learner_id)
                    let ID = learnerSubmission[i].learner_id
                    let a_id = learnerSubmission[i].assignment_id
                    while(ID === ID++ && a_id === assignmentInfo[j].id++){
                        sum = learnerSubmission[i].submission.score + learnerSubmission[i].submission.score++
                        console.log(sum)
                        j++
                    } if( j != learnerSubmission[i].assignment_id){
                      break
                    }
                }

            }
            
        }
        
        IDs()

        
        // went back to implement something like this to the final
        function average(LearnerSubmission){
                if( LearnerSubmission.learner_id === 125){
                    let maxPoints = assignmentInfo[0].pointsPossible + assignmentInfo[1].pointsPossible + assignmentInfo[2].pointsPossible
                    sum_125 = learnerSubmission[0].submission.score + learnerSubmission[1].submission.score + learnerSubmission[2].submission.score
                    avg_125 = (sum_125 / maxPoints) * 100 + "%" 
                    console.log("Learner ID: 125 " + "average weight: " + avg_125)
                } else if ( LearnerSubmission.learner_id === 132){
                    let maxPoints = assignmentInfo[0].pointsPossible + assignmentInfo[1].pointsPossible
                    sum_132 = learnerSubmission[3].submission.score + learnerSubmission[4].submission.score
                    avg_132 = (sum_132 / maxPoints) * 100 + "%"
                console.log("Learner ID: 132 " + "average weight: " + avg_132)
            }
        }
        average(learnerSubmission[1])