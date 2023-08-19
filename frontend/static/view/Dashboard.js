import {AbstractView} from "./AbstractView";

export class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam asperiores atque autem consequatur cumque cupiditate
                doloribus, ducimus ea earum enim eos esse est eum eveniet
                excepturi exercitationem fugiat fugit harum illo illum impedit
                ipsa ipsum iure laboriosam laborum magnam magni maiores maxime
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
            `;

    }
}