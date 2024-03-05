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
                    title : "Create a career development plan at the preferred campus",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Implementation projects in virtual environments",
                },
                data2 :{
                    title : "Online evaluation sessions and feedback",
                },
                data3 : {
                    title : "Online career counseling and preparation for application to the preferred campus"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Impact assessment of online training on major selection"},
                data2: {title : "Career development plan at the preferred campus"},
                data3 : {title : "Online post-training support for the campus admission process"}
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
                    title : "Enhance understanding of the desired field of study through online discussions",
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
                data2: {title : "Online academic and professional portfolios"},
                data3 : {title : "Performance evaluations during training"}
            }
        });
      case 'Pre - Training Phase':
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Identify students' interests and talents",
                },
                data2 : {
                    title : "Evaluate initial understanding through online basic skills assessments",
                },
                data3 : {
                    title : "Develop a personal development plan for preparation towards the dream major",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Online interest and talent assessments",
                },
                data2 :{
                    title : "Virtual basic skills testing",
                },
                data3 : {
                    title : "Online career counseling and study planning sessions"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Personal development plan towards the dream major"},
                data2: {title : "Online interest and talent profiles"},
                data3 : {title : "Short and long-term study plans"}
            }
        });
      default:
        return ({
            jargon : "Objective",
            data: {
                data1 : {
                    title : "Identify students' interests and talents",
                },
                data2 : {
                    title : "Evaluate initial understanding through online basic skills assessments",
                },
                data3 : {
                    title : "Develop a personal development plan for preparation towards the dream major",
                },
            },
            jargon2 : "Activities",
            data2:{
                data1 :{
                    title : "Online interest and talent assessments",
                },
                data2 :{
                    title : "Virtual basic skills testing",
                },
                data3 : {
                    title : "Online career counseling and study planning sessions"
                }
            },
            jargon3: "Outputs",
            data3 : {
                data1 : {title : "Personal development plan towards the dream major"},
                data2: {title : "Online interest and talent profiles"},
                data3 : {title : "Short and long-term study plans"}
            }
        });;
    }
};

export default fetchData