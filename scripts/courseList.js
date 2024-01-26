const courseArray = [
    {
        cover: './assets/images/ios.webp',
        title: 'iOS Development',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    },
    {
        cover: './assets/images/react.webp',
        title: 'React',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    },
    {
        cover: './assets/images/pythonIntro.webp',
        title: 'Intro to Python',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    },
    {
        cover: './assets/images/pythonAdv.webp',
        title: 'Advanced Python',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    },
    {
        cover: './assets/images/security.webp',
        title: 'Advanced Cybersecurity Course',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    },
    {
        cover: './assets/images/tot.webp',
        title: 'ToT - Training of Trainers',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    },
    {
        cover: './assets/images/blockchain.webp',
        title: 'Blockchain',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    },
    {
        cover: './assets/images/devops.webp',
        title: 'DevOps',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    },
    {
        cover: './assets/images/governance.webp',
        title: 'Information Security Governance',
        status: 'რეგისტრაცია დასრულებულია',
        link: ''
    }

]


const container = document.querySelector(".courses_list");

courseArray.forEach((item) => {
    const courseBlock = `
                <div class="course_single_block">
                    <img src="${item.cover}" class="course_single_block_cover" alt="course block cover"/>
        
                    <div class="course_single_block_title_status">
                    <p class="course_single_block_title">${item.title}</p>
                    <p class="course_single_block_status">${item.status}</p>
                    </div>
        
                    <div class="course_single_block_details">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__00000000-0000-0000-0000-000000000003 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
                        <g>
                            <path fill="#42AFF3" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
                        </g>
                    </svg>
        
                    <a href="${item.link}">კურსის დეტალები</a>
                    </div>  
                </div>
                        `;
    
    container.innerHTML += courseBlock;
})
