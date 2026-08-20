const projectModal = document.querySelector("#project-modal");
const modalCloseButton = document.querySelector(".modal-close");
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");

const projectDetailButtons = document.querySelectorAll(
  ".project-details-button",
);

const projectDetails = {
  derivalab: {
    title: "DerivaLab",
    content: `
      <h3>What it solves</h3>
      <p>
        DerivaLab is a full-stack calculus learning platform designed to
        support exercise practice, automated feedback, and learning progress
        tracking.
      </p>

      <h3>What I built</h3>
      <ul>
        <li>Exercise generation and answer validation.</li>
        <li>Automated feedback for common differentiation errors.</li>
        <li>Teacher and student dashboard workflows.</li>
        <li>Persistent data using PostgreSQL.</li>
        <li>REST API integration between the React frontend and Express backend.</li>
      </ul>

      <h3>Engineering focus</h3>
      <p>
        This project helped me work across the complete application flow:
        frontend state, API requests, backend services, database data, and
        deployment.
      </p>
    `,
  },

  "react-dashboard": {
    title: "React Client Dashboard",
    content: `
      <h3>Project goal</h3>
      <p>
        This project focuses on building a React interface that consumes data
        from an external API and presents it through a simple searchable
        dashboard.
      </p>

      <h3>Frontend focus</h3>
      <ul>
        <li>Fetch data from an external REST API.</li>
        <li>Handle loading and error states.</li>
        <li>Filter users through search input.</li>
        <li>Separate responsibilities into reusable React components.</li>
      </ul>

      <h3>What it demonstrates</h3>
      <p>
        The project demonstrates core React fundamentals including component
        structure, state management, data fetching, and conditional UI states.
      </p>
    `,
  },

  "bugfix-refactor": {
    title: "Frontend Bug Fix & Refactor",
    content: `
      <h3>Project goal</h3>
      <p>
        This project simulates working with an existing frontend codebase
        instead of building an application from scratch.
      </p>

      <h3>Debugging process</h3>
      <ul>
        <li>Identify visible application issues.</li>
        <li>Trace each issue to its root cause.</li>
        <li>Apply focused fixes without changing intended behavior.</li>
        <li>Refactor parts of the code to improve maintainability.</li>
      </ul>

      <h3>What it demonstrates</h3>
      <p>
        The project shows my approach to reading unfamiliar code, debugging
        problems, making controlled changes, and improving existing software.
      </p>
    `,
  },
};

let lastFocusedElement = null;

function openProjectModal(projectId, triggerElement) {
  const project = projectDetails[projectId];

  if (!project) {
    return;
  }

  lastFocusedElement = triggerElement;

  modalTitle.textContent = project.title;
  modalBody.innerHTML = project.content;

  projectModal.showModal();
}

function closeProjectModal() {
  projectModal.close();
}

projectDetailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openProjectModal(button.dataset.project, button);
  });
});

modalCloseButton.addEventListener("click", closeProjectModal);

projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeProjectModal();
  }
});

projectModal.addEventListener("close", () => {
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
});
