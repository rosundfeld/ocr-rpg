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
import { FormControl, InputLabel, Input, FormHelperText, Paper, Grid, Typography, Checkbox } from "@material-ui/core"

//componentes
import GetInfo from "../../Components/GetInfo/getInfo";

import border from "../../Assets/Ficha/border.png"

const useStyles = makeStyles({

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
  },
  borderAtr: {
    paddingTop: "1%",
    borderTop: "solid 2px black"
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
  BFBox: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.7rem",
  },
  componentsMargin: {
    margin: "1%"
  },
  TRContainer: {
    display: "flex"
  },
  componentShadow: {
    backgroundColor: "lightgray",
    borderRadius: "15px",
    padding: "1%",
    textAlign: "center"
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
  classArmorBorder: {
    backgroundImage: "url(../../Assets/Ficha/classeArmadura.png)"
  },
  paper: {
    backgroundColor: "white",
    borderRadius: "25px",
  }

});

export default function Fichas() {

  const classes = useStyles();

  return (
    <div className={"background"}>
      <div className={classes.container}>
        <h1 className={classes.title} >Fichas</h1>
        <div className={classes.componentBorder}>
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
                  <Grid item className={classes.borderStats}>
                    <Typography>Força</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Str"></InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Str" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.borderStats}>
                    <Typography>Destreza</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Dex"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Dex" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.borderStats}>
                    <Typography>Constituição</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Con"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Con" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.borderStats}>
                    <Typography>Inteligência</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Int"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Int" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.borderStats}>
                    <Typography>Sabedoria</Typography>
                    <FormControl>
                      <InputLabel htmlFor="Wis"> </InputLabel>
                      <Input value={10} min="-10" max="99" type="number" id="Wis" />
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.borderStats}>
                    <Typography>Carisma</Typography>
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
                  {/* Pontos de vida / Armadura / etc */}
                  <Grid className={classnames(classes.componentsMargin, classes.componentShadow)} container xs={12} direction="column">
                    {/* Classe armadura */}
                    <Grid container style={{ width: "100%", justifyContent: "center", margin: "2%" }}>
                      <Grid xs={4} item className={"classArmorBorder"}>
                        <Grid item className={"classArmorBorder"}>
                          <FormControl className={"classArmorBorder"}>
                            <InputLabel htmlFor="classeArmor"></InputLabel>
                            <Input min="-10" max="99" type="number" id="classeArmor" />
                          </FormControl>
                        </Grid>
                        <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                          <Typography className={classes.atrText}>Classe Armad.</Typography>
                        </Grid>
                      </Grid>
                      {/* Iniciativa */}
                      <Grid xs={4} item className={"classArmorBorder"}>
                        <Grid item className={"classArmorBorder"}>
                          <FormControl className={"classArmorBorder"}>
                            <InputLabel htmlFor="iniciativa"></InputLabel>
                            <Input min="-10" max="99" type="number" id="iniciativa" />
                          </FormControl>
                        </Grid>
                        <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                          <Typography className={classes.atrText}>Iniciativa</Typography>
                        </Grid>
                      </Grid>
                      {/* Deslocamento */}
                      <Grid xs={4} item className={"classArmorBorder"}>
                        <Grid item className={"classArmorBorder"}>
                          <FormControl className={"classArmorBorder"}>
                            <InputLabel htmlFor="deslocamento"></InputLabel>
                            <Input min="-10" max="99" type="number" id="deslocamento" />
                          </FormControl>
                        </Grid>
                        <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                          <Typography className={classes.atrText}>Desloc.</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.paper}>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "left", margin: "2%" }}>
                        <Typography className={classes.atrText}> PV Totais</Typography>
                        <FormControl className={"classArmorBorder"}>
                          <InputLabel htmlFor="PVTotal"></InputLabel>
                          <Input min="-10" max="99" type="number" id="Inspiracao" />
                        </FormControl>
                      </Grid>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center", height: "12vh" }}>
                        <FormControl className={"classArmorBorder"}>
                          <InputLabel htmlFor="PVAtual"></InputLabel>
                        </FormControl>
                      </Grid>
                      <Grid item className={classes.TRContainer} style={{ width: "100%", justifyContent: "center" }}>
                        <Typography className={classes.atrText}>Pontos de Vida Atuais</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div >
  );
}
