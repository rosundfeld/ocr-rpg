import React, { useState } from "react";
import { useEffect } from "react";

//use more than 1 class
import classnames from 'classnames'

//css
import "./Fichas.css";

//Images
import dragon from "../../Assets/Ficha/dragaoFicha.png";

//MakeStyles (material ui)
import { makeStyles } from "@material-ui/core/styles";

//material ui
import { FormControl, InputLabel, Input, FormHelperText, Paper, Grid, Typography, Checkbox, Select, MenuItem, TextField, ButtonGroup, Button } from "@material-ui/core"

//componentes
import GetInfo from "../../Components/GetInfo/getInfo";

//Firebase
import firebase from "../../firebase";

const useStyles = makeStyles({

  gridTotal: {
    width: "100%",
    justifyContent: "center"
  },
  componentBorder: {
    border: "3px solid black",
    borderRadius: "25px"
  },
  title: {
    textAlign: "left",
    width: "100%"
  },
  container: {
    margin: "auto",
    marginTop: "2%",
    width: "calc(100% - 100px)",
  },
  borderHeader: {
    borderLeft: "double 2px black"
  },
  borderStats: {
    border: "double black ",
    padding: "5%",
    borderRadius: "10px",
    marginTop: "4rem"
  },
  borderAtr: {
    paddingTop: "1%",
    borderTop: "solid 2px black",
  },
  inpirationBorderInput: {
    border: "double black",
  },
  BFBorderInput: {
    border: "double black",
    borderRadius: "50%"
  },
  inpirationBorderTypography: {
    border: "solid 2px black",
    borderRadius: " 0px 15px 15px 0px",
    margin: "auto"
  },
  inspirationBox: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  sabedoriaPassBorder: {
    border: "double black",
    borderRadius: "10px",
    marginTop: "1rem"
  },
  sabedoriaPassTypograf: {
    fontSize: "1.35rem"
  },
  BFBox: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.7rem",
  },
  componentsMargin: {
    margin: "1%"
  },
  textfieldCompoentsMargin: {
    padding: "1%",
    "textarea": {
      fontSize: "3rem",
    },
  },
  TRContainer: {
    display: "flex"
  },
  componentShadow: {
    backgroundColor: "lightgray",
    borderRadius: "15px",
    padding: "1%",
    textAlign: "center",
    height: "fit-content"
  },
  componentsborder: {
    border: "2px solid black",
    borderRadius: "10px"
  },
  atrText: {
    textAlign: "center",
    margin: "4% 2% 0 2%",
    fontWeight: "bold"
  },
  paper: {
    backgroundColor: "white",
    borderRadius: "25px",
    marginBottom: "1rem"
  },
  paperLifeDice: {
    backgroundColor: "white",
    borderRadius: "25px",
    "&:first-child": {
      marginRight: "2rem",
      marginLeft: "1rem"
    },
  },
  failSuccess: {
    textAlign: "center",
    margin: "4% 2% 0 2%",
    fontWeight: "bold",
    fontSize: "0.9rem"
  },
  failSuccessCheckbox: {
    margin: "0",
    padding: "0"
  },
  itensMagic: {
    width: "28%",
    fontSize: "1rem",
    textAlign: "center",
    margin: "0.6rem"
  },
  boldTypo: {
    fontWeight: "bold"
  },
  economy: {
    textAlign: "initial"
  },
  armorInitClass: {
    margin: "0.2rem",
    border: "double black"
  },
  buttonContainer: {
    width: "100%",
    fontWeight: "bold",
    fontSize: "2rem"
  }

});

export default function Fichas(props) {

  const classes = useStyles();

  if (!firebase.getCurrentUsername()) {
    //Não logado
    alert('Por favor, primeiro faça o login!')
    props.history.replace('/login')
    return null;
  }

  return (
    <div className={"background"}>
      <div className={classes.container}>
        <div className={classes.paper}>
          <GetInfo />
        </div>
        <Paper className={"userInfoContainer"}>
          <form>
            {/* Nome Personagem */}
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6} >
                <div className={"characterNameContainer"}>
                  <img className={"dragonName"} src={dragon}></img>
                  <FormControl>
                    <InputLabel htmlFor="nomePersonagem"> Nome do Personagem </InputLabel>
                    <Input id="nomePersonagem" />
                  </FormControl>
                </div>
              </Grid>
              {/* Outras Informações */}
              <Grid item xs={6} className={classes.borderHeader}>
                <div className={"otherUserInfo"}>
                  <FormControl>
                    <InputLabel htmlFor="classeNivel"> Classe e Nível </InputLabel>
                    <Input id="classeNivel" />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="antecedente"> Antecendente </InputLabel>
                    <Input id="antecedente" aria-describedby="texthelp" />
                    <FormHelperText id="texthelp">(Criminoso, Artista, Eremita ...)</FormHelperText>
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="nomeJogador"> Nome do Jogador </InputLabel>
                    <Input id="nomeJogador" />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="raca"> Raça </InputLabel>
                    <Input id="raca" />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="tendencia"> Tendência </InputLabel>
                    <Input id="tendencia" />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="pontosExperiencia"> Pontos de Experiência </InputLabel>
                    <Input id="pontosExperiencia" />
                  </FormControl>
                </div>
              </Grid>
              {/* Atributos */}
              <Grid className={classes.borderAtr} container direction="row">
                <Grid className={classnames(classes.componentsMargin, classes.componentShadow)} direction="column" xs={1} container>
                  <Grid item className={classnames(classes.borderStats, classes.paper)}>
                    <Typography className={classes.boldTypo}>Força</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Str"></InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Str" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classnames(classes.borderStats, classes.paper)}>
                    <Typography className={classes.boldTypo}>Destreza</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Dex"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Dex" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classnames(classes.borderStats, classes.paper)}>
                    <Typography className={classes.boldTypo}>Constituição</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Con"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Con" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classnames(classes.borderStats, classes.paper)}>
                    <Typography className={classes.boldTypo}>Inteligência</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Int"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Int" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classnames(classes.borderStats, classes.paper)}>
                    <Typography className={classes.boldTypo}>Sabedoria</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Wis"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Wis" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classnames(classes.borderStats, classes.paper)}>
                    <Typography className={classes.boldTypo}>Carisma</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Car"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Car" />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid className={classes.componentsMargin} container xs={3} direction="column">
                  {/* Inspiração */}
                  <Grid className={classes.componentsMargin} container>
                    <Grid item xs={3} className={classes.inpirationBorderInput}>
                      <FormControl style={{ padding: "5%" }}>
                        <InputLabel htmlFor="Inspiracao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="Inspiracao" />
                      </FormControl>
                    </Grid>
                    <Grid xs={9} item className={classes.inpirationBorderTypography}>
                      <Typography className={classes.inspirationBox}>Inspiração</Typography>
                    </Grid>
                  </Grid>
                  {/* Bonus de Proficiencia */}
                  <Grid className={classes.componentsMargin} container>
                    <Grid item xs={3} className={classes.BFBorderInput}>
                      <FormControl className={"BFInput"} style={{ width: "66%", padding: "5%" }}>
                        <InputLabel htmlFor="bonusProf"></InputLabel>
                        <Input min="-10" max="99" type="number" id="bonusProf" />
                      </FormControl>
                    </Grid>
                    <Grid xs={9} item className={classes.inpirationBorderTypography}>
                      <Typography className={classes.BFBox}>Bônus de Proficiência</Typography>
                    </Grid>
                  </Grid>
                  {/* Teste de resistência */}
                  <Grid className={classnames(classes.componentsMargin, classes.componentsborder)} container>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="bonusProfFor"></InputLabel>
                        <Input min="-10" max="99" type="number" id="bonusProfFor" />
                      </FormControl>
                      <Typography className={classes.atrText}>Força</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="bonusProfDez"></InputLabel>
                        <Input min="-10" max="99" type="number" id="bonusProfDez" />
                      </FormControl>
                      <Typography className={classes.atrText}>Destreza</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="bonusProfCon"></InputLabel>
                        <Input min="-10" max="99" type="number" id="bonusProfCon" />
                      </FormControl>
                      <Typography className={classes.atrText}>Constituição</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="bonusProfInt"></InputLabel>
                        <Input min="-10" max="99" type="number" id="bonusProfInt" />
                      </FormControl>
                      <Typography className={classes.atrText}>Inteligência</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="bonusProfSab"></InputLabel>
                        <Input min="-10" max="99" type="number" id="bonusProfSab" />
                      </FormControl>
                      <Typography className={classes.atrText}>Sabedoria</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="bonusProfCar"></InputLabel>
                        <Input min="-10" max="99" type="number" id="bonusProfCar" />
                      </FormControl>
                      <Typography className={classes.atrText}>Carisma</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                      <Typography className={classes.atrText}>TESTES DE RESISTÊNCIA</Typography>
                    </Grid>
                  </Grid>
                  {/* PERÍCIAS */}
                  <Grid className={classnames(classes.componentsMargin, classes.componentsborder)} container>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERAcrobacia"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERAcrobacia" />
                      </FormControl>
                      <Typography className={classes.atrText}>Acrobacia (DES)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERArcanismo"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERArcanismo" />
                      </FormControl>
                      <Typography className={classes.atrText}>Arcanismo (INT)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERAtletismo"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERAtletismo" />
                      </FormControl>
                      <Typography className={classes.atrText}>Atletismo (FOR)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERAtuacao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERAtuacao" />
                      </FormControl>
                      <Typography className={classes.atrText}>Atuação (CAR)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERBlefar"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERBlefar" />
                      </FormControl>
                      <Typography className={classes.atrText}>Blefar (CAR)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERFurtividade"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERFurtividade" />
                      </FormControl>
                      <Typography className={classes.atrText}>Furtividade (DES)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERHistoria"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERHistoria" />
                      </FormControl>
                      <Typography className={classes.atrText}>História (INT)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERIntimidacao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERIntimidacao" />
                      </FormControl>
                      <Typography className={classes.atrText}>Intimidação (CAR)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERIntuicao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERIntuicao" />
                      </FormControl>
                      <Typography className={classes.atrText}>Intuição (Sab)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERInvestigacao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERInvestigacao" />
                      </FormControl>
                      <Typography className={classes.atrText}>Investigação (Int)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERLidarAnimais"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERLidarAnimais" />
                      </FormControl>
                      <Typography className={classes.atrText}>Lidar com Animais (Sab) </Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERMedicina"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERMedicina" />
                      </FormControl>
                      <Typography className={classes.atrText}>Medicina (Sab)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERNatureza"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERNatureza" />
                      </FormControl>
                      <Typography className={classes.atrText}>Natureza (Int)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERPercepcao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERPercepcao" />
                      </FormControl>
                      <Typography className={classes.atrText}>Percepção (Sab)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERPersuacao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERPersuacao" />
                      </FormControl>
                      <Typography className={classes.atrText}>Persuasão (Car)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PERPrestidigitacai"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PERPrestidigitacao" />
                      </FormControl>
                      <Typography className={classes.atrText}>Prestidigitação (Des)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PEReligiao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PEReligiao" />
                      </FormControl>
                      <Typography className={classes.atrText}>Religião (Int)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer}>
                      <Checkbox
                        color="primary"
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                      <Typography className={classes.atrText}>+</Typography>
                      <FormControl className={"TRAtr"}>
                        <InputLabel htmlFor="PESobrevivencia"></InputLabel>
                        <Input min="-10" max="99" type="number" id="PESobrevivencia" />
                      </FormControl>
                      <Typography className={classes.atrText}>Sobrevivência (Sab)</Typography>
                    </Grid>
                    <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                      <Typography className={classes.atrText}>PERÍCIAS</Typography>
                    </Grid>
                  </Grid>
                  {/* Sabedoria Passiva (Percepção) */}
                  <Grid className={classes.componentsMargin} container>
                    <Grid item xs={3} className={classes.sabedoriaPassBorder}>
                      <FormControl style={{ padding: "5%" }}>
                        <InputLabel htmlFor="Inspiracao"></InputLabel>
                        <Input min="-10" max="99" type="number" id="Inspiracao" />
                      </FormControl>
                    </Grid>
                    <Grid xs={9} item className={classes.inpirationBorderTypography}>
                      <Typography className={classes.sabedoriaPassTypograf}>Sabedoria Passiva (Percepção)</Typography>
                    </Grid>
                  </Grid>
                  {/* Idiomas e outras proficiencias */}
                  <Grid className={classnames(classes.componentsMargin, classes.sabedoriaPassBorder)} container>
                    <Grid item xs={12} >
                      <TextField
                        style={{ width: "100%", height: "9rem" }}
                        className={"textAreaLanguage"}
                        label="Idiomas e outras proficiências"
                        multiline
                        rowsMax={9}
                      />
                    </Grid>
                    <Grid item className={classes.gridTotal}>
                      <Typography className={classes.atrText}>Idiomas e outras proficiências</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Pontos de vida / Armadura / etc */}
                <Grid className={classnames(classes.componentsMargin, classes.componentShadow)} container xs={3} direction="column">
                  {/* Classe armadura */}
                  <Grid container style={{ width: "100%", justifyContent: "center", margin: "2%" }}>
                    <Grid xs={3} item className={classnames(classes.paper, classes.armorInitClass)}>
                      <Grid item >
                        <FormControl >
                          <InputLabel htmlFor="classeArmor"></InputLabel>
                          <Input min="-10" max="99" type="number" id="classeArmor" />
                        </FormControl>
                      </Grid>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                        <Typography className={classes.atrText}>Classe Armad.</Typography>
                      </Grid>
                    </Grid>
                    {/* Iniciativa */}
                    <Grid xs={3} item className={classnames(classes.paper, classes.armorInitClass)}>
                      <Grid item >
                        <FormControl >
                          <InputLabel htmlFor="iniciativa"></InputLabel>
                          <Input min="-10" max="99" type="number" id="iniciativa" />
                        </FormControl>
                      </Grid>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                        <Typography className={classes.atrText}>Iniciativa</Typography>
                      </Grid>
                    </Grid>
                    {/* Deslocamento */}
                    <Grid xs={3} item className={classnames(classes.paper, classes.armorInitClass)}>
                      <Grid item >
                        <FormControl >
                          <InputLabel htmlFor="deslocamento"></InputLabel>
                          <Input min="-10" max="99" type="number" id="deslocamento" />
                        </FormControl>
                      </Grid>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                        <Typography className={classes.atrText}>Desloc.</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Pontos de vida Totais */}
                  <Grid container className={classes.paper}>
                    <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "left", margin: "2%" }}>
                      <Typography className={classes.atrText}> PV Totais</Typography>
                      <FormControl>
                        <InputLabel htmlFor="PVTotal"></InputLabel>
                        <Input min="-10" max="99" type="number" id="Inspiracao" />
                      </FormControl>
                    </Grid>
                    <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center", height: "12vh" }}>
                      <FormControl >
                        <InputLabel htmlFor="PVAtual"></InputLabel>
                      </FormControl>
                    </Grid>
                    <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                      <Typography className={classes.atrText}>Pontos de Vida Atuais</Typography>
                    </Grid>
                  </Grid>
                  {/* Pontos de vida Temp */}
                  <Grid container className={classes.paper}>
                    <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "left", margin: "2%" }}>
                    </Grid>
                    <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center", height: "12vh" }}>
                      <FormControl className={classes.paper}>
                        <InputLabel htmlFor="PVAtual"></InputLabel>
                      </FormControl>
                    </Grid>
                    <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                      <Typography className={classes.atrText}>Pontos de Vida Temporários</Typography>
                    </Grid>
                  </Grid>
                  {/* Dados de vida e vida/morte */}
                  <Grid container row>
                    <Grid item className={classes.paperLifeDice} xs={5}>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center", margin: "2%", alignItems: "center", display: "flex" }}>
                        <Typography className={classes.atrText}>Total</Typography>
                        <FormControl className={"formSmall"}>
                          <InputLabel htmlFor="lifeDice"></InputLabel>
                          <Input min="-10" max="99" type="number" id="lifeDice" />
                        </FormControl>
                      </Grid>
                      <Grid item className={classes.lifeDiceInput} style={{ width: "100%", justifyContent: "center", marginTop: "4rem" }}>
                        <FormControl className={classes.formControl}>
                          <Select>
                            <MenuItem value="1d4">1d4</MenuItem>
                            <MenuItem value="1d6">1d6</MenuItem>
                            <MenuItem value="1d10">1d10</MenuItem>
                            <MenuItem value="1d12">1d12</MenuItem>
                            <MenuItem value="1d20">1d20</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                        <Typography className={classes.atrText}>Dados de vida</Typography>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.paperLifeDice} xs={5} >
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center", display: "flex", justifyContent: "center", alignItems: "center", margin: "0rem" }}>
                        <Typography className={classes.failSuccess}>Sucessos</Typography>
                        <Checkbox className={classes.failSuccessCheckbox} disabled />
                        <Checkbox className={classes.failSuccessCheckbox} disabled />
                        <Checkbox className={classes.failSuccessCheckbox} disabled />
                      </Grid>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0rem" }}>
                        <Typography className={classes.failSuccess}>Fracassos</Typography>
                        <Checkbox className={classes.failSuccessCheckbox} disabled />
                        <Checkbox className={classes.failSuccessCheckbox} disabled />
                        <Checkbox className={classes.failSuccessCheckbox} disabled />
                      </Grid>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center", marginTop: "4.3rem" }}>
                        <Typography className={classes.atrText}>Teste contra a morte</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Ataques e magias */}
                  <Grid className={classnames(classes.magicItensBorder, classes.sabedoriaPassBorder, classes.paper)} container>
                    <Grid item xs={12} >
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemName">Nome</InputLabel>
                        <Input id="itemName" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemBonus">Bônus</InputLabel>
                        <Input min="-10" max="99" type="number" id="itemBonus" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemType">Dano/Tipo</InputLabel>
                        <Input id="itemType" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} >
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemName">Nome</InputLabel>
                        <Input id="itemName" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemBonus">Bônus</InputLabel>
                        <Input min="-10" max="99" type="number" id="itemBonus" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemType">Dano/Tipo</InputLabel>
                        <Input id="itemType" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} >
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemName">Nome</InputLabel>
                        <Input id="itemName" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemBonus">Bônus</InputLabel>
                        <Input min="-10" max="99" type="number" id="itemBonus" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemType">Dano/Tipo</InputLabel>
                        <Input id="itemType" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} >
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemName">Nome</InputLabel>
                        <Input id="itemName" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemBonus">Bônus</InputLabel>
                        <Input min="-10" max="99" type="number" id="itemBonus" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemType">Dano/Tipo</InputLabel>
                        <Input id="itemType" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} >
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemName">Nome</InputLabel>
                        <Input id="itemName" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemBonus">Bônus</InputLabel>
                        <Input min="-10" max="99" type="number" id="itemBonus" />
                      </FormControl>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="itemType">Dano/Tipo</InputLabel>
                        <Input id="itemType" />
                      </FormControl>
                    </Grid>
                    <Grid item className={classes.gridTotal}>
                      <Typography className={classes.atrText}>Ataques e Magias</Typography>
                    </Grid>
                  </Grid>
                  {/* Equipamentos */}
                  <Grid className={classnames(classes.magicItensBorder, classes.sabedoriaPassBorder, classes.paper)} container>
                    <Grid item xs={12} className={classes.economy}>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="coinsPC">PC</InputLabel>
                        <Input type="number" id="coinsPC" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.economy}>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="coinsPP">PP</InputLabel>
                        <Input type="number" id="coinsPP" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.economy}>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="coinsPE">PE</InputLabel>
                        <Input type="number" id="coinsPE" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.economy}>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="coinsPO">PO</InputLabel>
                        <Input type="number" id="coinsPO" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.economy}>
                      <FormControl className={classes.itensMagic}>
                        <InputLabel htmlFor="coinsPL">PL</InputLabel>
                        <Input type="number" id="coinsPL" />
                      </FormControl>
                    </Grid>
                    <Grid item className={classes.gridTotal}>
                      <Typography className={classes.atrText}>Equipamento</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className={classnames(classes.componentsMargin, classes.componentShadow)} container xs={4} direction="column">
                  {/* Traços de personalidade */}
                  <Grid className={classnames(classes.componentsMargin, classes.sabedoriaPassBorder, classes.paper, classes.textfieldCompoentsMargin)} container>
                    <Grid item xs={12} >
                      <TextField
                        className={"textAreaLanguage"}
                        label="Traços de personalidade"
                        multiline
                        rowsMax={9}
                      />
                    </Grid>
                    <Grid item className={classes.gridTotal}>
                      <Typography className={classes.atrText}>Traços de personalidade</Typography>
                    </Grid>
                  </Grid>
                  {/* Ideais */}
                  <Grid className={classnames(classes.componentsMargin, classes.sabedoriaPassBorder, classes.paper, classes.textfieldCompoentsMargin)} container>
                    <Grid item xs={12} >
                      <TextField
                        className={"textAreaLanguage"}
                        label="Ideais"
                        multiline
                        rowsMax={9}
                      />
                    </Grid>
                    <Grid item className={classes.gridTotal}>
                      <Typography className={classes.atrText}>Ideais</Typography>
                    </Grid>
                  </Grid>
                  {/* Ligações */}
                  <Grid className={classnames(classes.componentsMargin, classes.sabedoriaPassBorder, classes.paper, classes.textfieldCompoentsMargin)} container>
                    <Grid item xs={12} >
                      <TextField
                        className={"textAreaLanguage"}
                        label="Ligações"
                        multiline
                        rowsMax={9}
                      />
                    </Grid>
                    <Grid item className={classes.gridTotal}>
                      <Typography className={classes.atrText}>Ligações</Typography>
                    </Grid>
                  </Grid>
                  {/* Defeitos */}
                  <Grid className={classnames(classes.componentsMargin, classes.sabedoriaPassBorder, classes.paper, classes.textfieldCompoentsMargin)} container>
                    <Grid item xs={12} >
                      <TextField
                        className={"textAreaLanguage"}
                        label="Defeitos"
                        multiline
                        rowsMax={9}
                      />
                    </Grid>
                    <Grid item className={classes.gridTotal}>
                      <Typography className={classes.atrText}>Defeitos</Typography>
                    </Grid>
                  </Grid>
                  {/* Habilidades */}
                  <Grid className={classnames(classes.componentsMargin, classes.sabedoriaPassBorder, classes.paper, classes.textfieldCompoentsMargin)} container>
                    <Grid item xs={12} >
                      <TextField
                        style={{ height: "46rem" }}
                        className={"textAreaLanguage"}
                        label="Características e habilidades"
                        multiline
                        rowsMax={38}
                      />
                    </Grid>
                    <Grid item className={classes.gridTotal}>
                      <Typography className={classes.atrText}>Características e habilidades</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item >
                <ButtonGroup size="large" color="secondary" className={classes.buttonContainer}>
                  <Button>Atualizar</Button>
                  <Button>Enviar</Button>
                  <Button>Limpar</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div >
  );
}
