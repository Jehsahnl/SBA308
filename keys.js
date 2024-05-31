// Moving on to part 3: Assignment ID
/**Each assignment ahs a key with it's ID
 * the value SHOULD be 
 */

/**BECAUSE we didn't add the rest of the data yet, we accidently completed part 3 when doing part 2. part 2 is supposed to add ALL of that student's assignments, 
 * while the percentage we just recieved from our function above is supposed to be the key for part 3. 
 * WITH THAT SAID, we still haven't completed part 3, bc it is stuck reading the first object.
 * 
 * The problem is we need to tell it that we want to move on and read the next object in the array but we can't figure it out
*/

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

    let submittedScore = learnerSubmission[0].submission.score
    let maxPoints = assignmentInfo[0].pointsPossible

    // got the function to work and output the right keys for each assignment, but was working to implepent it so that it would only display one key for the respective learner and assignment

function IDs(IDs){
    // this tells js to increment to each object in assignment info
    for(j = 0; j < assignmentInfo.length; j++){
        for(i = 0; i < learnerSubmission.length; i++){
            if(assignmentInfo[j].id === learnerSubmission[i].assignment_id){
                result = (learnerSubmission[i].submission.score / assignmentInfo[j].pointsPossible) * 100 + "%"
            console.log( "Key:" + result)

              } else{continue}
            
        }

    }
    

}

IDs()



