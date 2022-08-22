import Title from "../Title/index.js";
import "./style.css";
import Typography from "../Typography/index.js";
import ClientsWrapper from "../ClientsWrapper/index.js";



function Clients() {
  return (
    <section className="clientssection">
      <Title>Testimonial</Title>
      <Typography type="H1">
        Clientâ€™s Feedback Latest Reviews <span>From My Clients</span>
      </Typography>
      <ClientsWrapper/>
    </section>
  );
}
export default Clients;