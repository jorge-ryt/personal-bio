class SkillCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        const skill = this.getAttribute('skill');
        const level = this.getAttribute('level');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: var(--card-bg, #f8f9fa);
                    padding: 0.625rem 0.938rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    font-family: Arial, sans-serif;
                }
                .skill {
                    font-size: 1.2rem
                    font-weight: bold;
                }
                .level {
                    font-size: 1rem;
                    color: gray;
                }
            </style>
            <article>
                <p class="skill">${skill}</p>
                <p class="level">${level}</p>
            </article>
        `;
    }
};

customElements.define('skill-card', SkillCard);
