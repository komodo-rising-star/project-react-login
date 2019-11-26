import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import foto from "../image/satu.png";
import foto2 from "../image/dua.png";
import foto3 from "../image/tiga.png";
import foto4 from "../image/empat.png";

const CardExampleGroups = () => (
  <div>
    <h1 class="choose">Choose Your Developers</h1>
  <Card.Group class="card">
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={foto2} />
        <Card.Header>Faris Ibrahim</Card.Header>
        <Card.Meta>Fullstack Developer</Card.Meta>
        <Card.Description>
          I am <strong>Fullstack Developer</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Make a call
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={foto} />
        <Card.Header>Sofyan Agus</Card.Header>
        <Card.Meta>Fullstack Developer</Card.Meta>
        <Card.Description>
        I am <strong>Fullstack Developer</strong>        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Make a call
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={foto3} />
        <Card.Header>Taufik Hidayat</Card.Header>
        <Card.Meta>Fullstack Developer</Card.Meta>
        <Card.Description>
        I am <strong>Fullstack Developer</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Make a call
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={foto4} />
        <Card.Header>Dian Puspitasari</Card.Header>
        <Card.Meta>Fullstack Developer</Card.Meta>
        <Card.Description>
        I am <strong>Fullstack Developer</strong>        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Make a call
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
  </div>
);

export default CardExampleGroups;
