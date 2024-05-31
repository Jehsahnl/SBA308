/**You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use is provided below. */

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
    assignments: [assignmentInfo]
}

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

/**
 * Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
 */

/** Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above. */

function getLearnerData(courseInfo, AssignmentGroup, [LearnerSubmission]){
    
}