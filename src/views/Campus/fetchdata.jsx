const fetchData = (category) => {
    switch (category) {
      case 'Post - Training Phase':
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Apply skills and knowledge in real-world scenarios",
                },
                data2 : {
                    title : "Evaluate the impact of online training on major selection",
                },
                data3 : {
                    title : "Create career development plans and receive post-training support",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Implementation projects in virtual or real-world environments",
                },
                data2 :{
                    title : "Online evaluation sessions and feedback",
                },
                data3 : {
                    title : "Online career counseling and post-training support"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Impact assessment of online training on major selection"},
                data2: {title : "Career development plans and online post-training support"},
                data3 : {title : "Online support for skill application and job placement"}
            }
        });
      case 'Training Phase':
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Develop academic and practical skills through online courses",
                },
                data2 : {
                    title : "Enhance understanding of concepts in the field of study through online discussions",
                },
                data3 : {
                    title : "Participation in virtual projects and activities related to the major",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Online courses, forum discussions, and virtual practices",
                },
                data2 :{
                    title : "Collaborative projects and major-related assignments online",
                },
                data3 : {
                    title : "Virtual industry webinars or seminars by experts in the field"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Certificates in the desired field of study"},
                data2: {title : "Academic and professional portfolios"},
                data3 : {title : "Performance evaluations during training"}
            }
        });
      case 'Pre - Training Phase':
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Identify students' interests, skills, and career goals",
                },
                data2 : {
                    title : "Evaluate initial knowledge and skills through online assessments",
                },
                data3 : {
                    title : "Develop personal and career development plans",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Online assessments of interests, skills, and career goals",
                },
                data2 :{
                    title : "Online testing of basic knowledge and skills",
                },
                data3 : {
                    title : "Virtual career counseling and personal development planning sessions"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Personal and career development plans"},
                data2: {title : "Profiles of students' interests, skills, and career goals"},
                data3 : {title : "Short and long-term study and skill development plans"}
            }
        });
      default:
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Identify students' interests, skills, and career goals",
                },
                data2 : {
                    title : "Evaluate initial knowledge and skills through online assessments",
                },
                data3 : {
                    title : "Develop personal and career development plans",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Online assessments of interests, skills, and career goals",
                },
                data2 :{
                    title : "Online testing of basic knowledge and skills",
                },
                data3 : {
                    title : "Virtual career counseling and personal development planning sessions"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Personal and career development plans"},
                data2: {title : "Profiles of students' interests, skills, and career goals"},
                data3 : {title : "Short and long-term study and skill development plans"}
            }
        });;
    }
};

export default fetchData