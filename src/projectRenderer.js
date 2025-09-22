import img from './folder.svg';

export function renderProjects(projects, projectsContainer, activeProjectId) {
    projectsContainer.textContent = '';

    projects.forEach((project) => {
        const projectDiv = document.createElement('div');
        const projectImg = document.createElement('img');
        const projectName = document.createElement('h4');
        const projectCountDiv = document.createElement('div');
        const projectCount = document.createElement('h3');

        projectDiv.classList.add('project');
        projectCountDiv.classList.add('project-count');

        projectImg.src = img;
        projectImg.alt = 'Folder';

        projectName.textContent = project.name;
        projectCount.textContent = project.tasks.length;

        projectCountDiv.appendChild(projectCount);
        projectDiv.appendChild(projectImg);
        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectCountDiv);
        projectDiv.dataset.id = project.id;

        if (project.id === activeProjectId) projectDiv.classList.add('current');
        projectsContainer.appendChild(projectDiv);
    });
}

export function renderOptionsProject(projects, selectHtml, activeProjectId) {
    selectHtml.textContent = '';

    const sortedProjects = [...projects].sort((a, b) => {
        if (a.id === activeProjectId) return -1;
        if (b.id === activeProjectId) return 1;
        return 0;
    });

    sortedProjects.forEach((project) => {
        const projectOptionHtml = document.createElement('option');
        projectOptionHtml.value = project.id;
        projectOptionHtml.dataset.id = project.id;
        projectOptionHtml.textContent = project.name;
        selectHtml.appendChild(projectOptionHtml);
    });
}
