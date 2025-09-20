import img from './folder.svg';

export function renderProjects(projects, container, activeProjectId) {
    container.textContent = '';

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
        container.appendChild(projectDiv);
    });
}

export function renderOptionsProject(projects, selectHtml) {
    selectHtml.textContent = '';

    projects.forEach((project) => {
        const projectOptionHtml = document.createElement('option');
        projectOptionHtml.setAttribute('value', project.name.toLowerCase());
        projectOptionHtml.textContent = project.name;
        projectOptionHtml.dataset.id = project.id;
        selectHtml.appendChild(projectOptionHtml);
    });
}
