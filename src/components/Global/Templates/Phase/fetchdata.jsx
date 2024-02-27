const fetchData = (category) => {
    switch (category) {
      case 'Post - Training Phase':
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Apply skills in the workplace",
                },
                data2 : {
                    title : "Evaluate the impact of training on productivity and development",
                },
                data3 : {
                    title : "Create career development plans and provide post-training support",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Implementation projects in the workplace",
                },
                data2 :{
                    title : "Online evaluation sessions and feedback",
                },
                data3 : {
                    title : "Career counseling and post-training support"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Impact evaluations of training and skill implementation"},
                data2: {title : "Career development plans and online post-training support"},
                data3 : {title : "Support for increased productivity and professional growth"}
            }
        });
      case 'Training Phase':
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Develop employee skills through online courses",
                },
                data2 : {
                    title : "Enhance knowledge of concepts and applications",
                },
                data3 : {
                    title : "Participation in projects and tasks related to work",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Online courses and training sessions",
                },
                data2 :{
                    title : "Collaborative projects and work-related tasks online",
                },
                data3 : {
                    title : "Mentoring and guidance sessions through virtual platforms"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Certificates for online training and courses"},
                data2: {title : "Online skills and job performance portfolios"},
                data3 : {title : "Performance evaluations during training"}
            }
        });
      case 'Pre - Training Phase':
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Identify employees' development needs online",
                },
                data2 : {
                    title : "Evaluate initial skills and knowledge through online assessments",
                },
                data3 : {
                    title : "Develop personal and professional development plans",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Online surveys for development needs",
                },
                data2 :{
                    title : "Online skills and knowledge assessments",
                },
                data3 : {
                    title : "Virtual career development counseling sessions"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Personal and professional development plans"},
                data2: {title : "Initial skills and knowledge evaluations"},
                data3 : {title : "Career development maps and pre-training plans"}
            }
        });
      default:
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Identify employees' development needs online",
                },
                data2 : {
                    title : "Evaluate initial skills and knowledge through online assessments",
                },
                data3 : {
                    title : "Develop personal and professional development plans",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Online surveys for development needs",
                },
                data2 :{
                    title : "Online skills and knowledge assessments",
                },
                data3 : {
                    title : "Virtual career development counseling sessions"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Personal and professional development plans"},
                data2: {title : "Initial skills and knowledge evaluations"},
                data3 : {title : "Career development maps and pre-training plans"}
            }
        });;
    }
};

export default fetchData