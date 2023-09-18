import BookingForm from "../booking_form/BookingForm";
import SimpleDialog from "../simple_dialog/SimpleDialog";
import classes from "./clientSearchForm.module.css";

const ClientSearchForm = () => {
  return (
    <section className={classes.searchDiv}>
      <div>
        <fieldset>
          <label htmlFor="client">Cliente</label>
          <input type="text" id="cliente" />
        </fieldset>
        <fieldset>
          <label htmlFor="client">Tatuador</label>
          <input type="text" id="tatuador" />
        </fieldset>
        <fieldset>
          <label htmlFor="client">Data</label>
          <input type="text" id="data" />
        </fieldset>
      </div>
      <div className={classes.buttonDiv}>
        <button className={classes.searchButton}>Pesquisar</button>
        <SimpleDialog buttonLabel={'Agendar Novo'} buttonType={'button'} dialogTitle={'Agendar Novo Cliente'} dialogContent={<BookingForm/>}/>
      </div>
    </section>
  );
};

export default ClientSearchForm;
