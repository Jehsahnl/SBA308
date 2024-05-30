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



    //looking to give out an array of of objects as described
    /** so the goal is to output an array that gives you recalculated info
     *  It should look like this;
     * {
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}

     */
    /** simplified, we're looking for this:
     * 
     * id: "Learner's id"
     * avg:"learner’s total, weighted average"
     * assignment+id: "each assignment should have a key with it's id"
     */

    function getLearnerData(courseInfo, assignmentGroup, assignmentInfo){

    }

    // I think the best way to think about this would be to break each of these 3 parts up, figure out how to make them work one-by-one, and then find out how to implement them together to streamline the process.

    // Part 1: ID - the ID of the learner for which this data has been collected

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

        
    
// it is IMPERATIVE to understand how to call properties within an object that is also within an array, use this as the PRIME example:
    //    console.log(learnerSubmission[0].learner_id)

    // for(i = 0; i < learnerSubmission.length; i++){
    //     console.log(learnerSubmission[i].learner_id)
    // }

// the code above works perfectly for our two submissions, but what if we wanted to make it a function?

function IDs(){
    for(i = 0; i < learnerSubmission.length; i++){
        console.log(learnerSubmission[i].learner_id)
    }
}

IDs()

//Now that we've found the ID of the students, we can now move onto the next part...

// Part 2: Average
/** You must find the learner's total average.
 * Assignments with more "points_possible" should be counted for more
 * (e.g. a learner with 50/100 on one assignment and 190/200 on another
 * would have a weighted average score of 240/300 = 80%.)
 */
//This info will be handy:
const assignmentInfo = [{
    id: 1, 
    name: "Declare a Variable", 
      // the due date for the assignment
    due_at: "2023-01-25", 
      // the maximum points possible for the assignment
    pointsPossible: 50}]
    /** basically in this case we need to add each respective student's work papers to find their average, In this case, each student has one paper. How would we display the average for each student? */
    
    // this is how you would grab more stuff within an array of objects 9 in this case, an object within an object within an array
   
    console.log(assignmentInfo[0].id)

    

// you can easily turn a decimal into a percentage by multplying the answer by 100, and adding a "%" to your final answer


    // if(assignmentInfo[0].id === learnerSubmission[1].assignment_id ){
    //     //if this assignment ID is the same as the student's assignment ID, then divide score by points_possible and return a percentage
    //     console.log((submittedScore / maxPoints) * 100 + "%")

    // }

    //Ok, we now have the average for one student, but what about 2?

   function avgWeights(){
    for(i = 0; i < learnerSubmission.length; i++){
        while(assignmentInfo[0].id === learnerSubmission[i].assignment_id){
            console.log((submittedScore / maxPoints) * 100 + "%")
        

    }

        }

    }
   
   }
    

    
