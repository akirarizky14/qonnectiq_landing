const fetchData = (category) => {
    switch (category) {
      case 'Company':
        return ({
            jargon : "Elevating Employee Skills through Our Advanced LMS Platform ",
            data: {
                data1 : {
                    title : "Optimal Flexibility",
                    description : "Enjoy learning anytime, anywhere with our LMS platform, offering flexible access to enhance employee skills based on individual needs."
                },
                data2 : {
                    title : "Customized Curriculum",
                    description : "Personalize the learning experience with our adaptable curriculum, allowing companies to tailor training materials to specific industry and organizational needs."
                },
                data3 : {
                    title : "Real-time Progress Monitoring",
                    description : "Monitor and evaluate employee progress directly through real-time progress tracking features, ensuring the achievement of learning goals and effective development."
                },
                data4 : {
                    title : "High-Quality Multimodal Content",
                    description : "Deliver an engaging learning experience with high-quality multimodal content, including videos, articles, and interactive elements, to enhance engagement and understanding."
                },
                data5 : {
                    title : "Detailed Performance Analysis",
                    description : "Gain profound insights into training effectiveness through our performance analysis tools, assisting companies in making strategic decisions for further development."
                }
            }
        });
      case 'School':
        return ({
            jargon : "Empower Seamless Learning for a Brighter Future With Our Innovative LMS.",
            data: {
                data1 : {
                    title : "Centralized Learning Platform",
                    description : "Provides a centralized platform for students and teachers to access learning materials, resources, and communication tools, streamlining the educational experience."
                },
                data2 : {
                    title : "Efficient Administration",
                    description : "Facilitates administrative tasks such as attendance tracking, grading, and course management, reducing manual workload for school staff."
                },
                data3 : {
                    title : "Parental Involvement",
                    description : "Enhances parental involvement by offering insights into student progress, attendance, and assignments, fostering a collaborative relationship between parents and teachers."
                },
                data4 : {
                    title : "Customized Learning Paths",
                    description : "Supports the creation of customized learning paths and content, catering to individual student needs and learning styles."
                },
                data5 : {
                    title : "Collaborative Learning",
                    description : "Encourages collaborative learning through group projects, online discussions, and interactive assignments, promoting teamwork and communication skills."
                }
            }
        });
      case 'Campus':
        return ({
            jargon : "Empowering Students through Effortless Learning on our LMS Platform",
            data: {
                data1 : {
                    title : "Flexible Learning Access",
                    description : "Enables students to access learning materials at their own convenience, fostering flexible learning schedules."
                },
                data2 : {
                    title : "Real-time Progress Tracking",
                    description : "Allows for real-time monitoring of individual student progress, facilitating timely intervention and support."
                },
                data3 : {
                    title : "Automated Evaluation",
                    description : "Streamlines the assessment process with automated grading of exams and assignments, providing immediate feedback."
                },
                data4 : {
                    title : "Discussion Forums",
                    description : "Provides online platforms for student-teacher and peer-to-peer discussions, enhancing collaboration and idea exchange."
                },
                data5 : {
                    title : "Content Enrichment",
                    description : "Supports the incorporation of diverse multimedia content, such as videos, audio, and images, enhancing engagement and learning effectiveness."
                }
            }
        });
      default:
        return ({
            jargon : "Elevating Employee Skills through Our Advanced LMS Platform ",
            data: {
                data1 : {
                    title : "Optimal Flexibility",
                    description : "Enjoy learning anytime, anywhere with our LMS platform, offering flexible access to enhance employee skills based on individual needs."
                },
                data2 : {
                    title : "Customized Curriculum",
                    description : "Personalize the learning experience with our adaptable curriculum, allowing companies to tailor training materials to specific industry and organizational needs."
                },
                data3 : {
                    title : "Real-time Progress Monitoring",
                    description : "Monitor and evaluate employee progress directly through real-time progress tracking features, ensuring the achievement of learning goals and effective development."
                },
                data4 : {
                    title : "High-Quality Multimodal Content",
                    description : "Deliver an engaging learning experience with high-quality multimodal content, including videos, articles, and interactive elements, to enhance engagement and understanding."
                },
                data5 : {
                    title : "Detailed Performance Analysis",
                    description : "Gain profound insights into training effectiveness through our performance analysis tools, assisting companies in making strategic decisions for further development."
                }
            }
        });;
    }
};

export default fetchData