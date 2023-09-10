import classes from "./clientSearchForm.module.css";

const ClientSearchForm = () => {
  return (
    <form className={classes.searchDiv}>
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
        <button type="button" className={classes.scheduleButton}>
          Agendar novo
        </button>
      </div>
    </form>
  );
};

export default ClientSearchForm;
