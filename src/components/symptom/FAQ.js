import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function SimpleExpansionPanel() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            How is COVID-19 diagnosed?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            COVID-19 testing is done using samples collected by a nasopharyngeal
            swab (NP) or throat swab. The BCCDC Public Health Laboratory (PHL)
            has developed laboratory guidance for COVID-19 diagnostic testing.
            If your health care provider thinks you may have the new
            coronavirus, they will arrange for testing.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Should I get tested for COVID-19?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            If an individual has no symptoms, even if they are a contact of a
            confirmed case or a returning traveller, they do not require a test.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Do people vulnerable to COVID-19 complications get tested when they
            have mild symptoms?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yes. People who are vulnerable to COVID-19 complications should get
            tested if they develop symptoms, even if they are mild. Physicians
            and nurse practitioners may have a lower threshold for testing
            people who are more vulnerable to complications from COVID-19, or
            people who care for these individuals.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Is it important for certain groups of people to get tested if they
            have symptoms?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yes, it is especially important for people who develop cold,
            influenza or COVID-19-like symptoms to be tested if they are:
            Healthcare workers Residents of remote, isolated or Indigenous
            communities People living and working in communal settings such as
            work-camps, correctional facilities, shelters, group homes, assisted
            living and seniors' residences People who are homeless or have
            unstable housing Essential service providers (e.g., first
            responders) Returning travellers identified at a point of entry in
            Canada.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Who does not need to be tested for COVID-19?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            People without symptoms do not need to be tested for COVID-19. In
            some cases, a physician or nurse practitioner may decide that a
            person with symptoms that can be managed at home does not need to be
            tested.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Would my test result come back faster depending on where I test?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            ‎The time until test results are available may vary depending on
            testing location. Throughout B.C., there are many labs running tests
            seven days a week to get test results back as soon as possible. Go
            to the Test Results page to find out how to get your negative
            results by phone, text or online.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What do I do after I get tested?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            It is important to stay at home and avoid contact with others
            (self-isolate) after your test. Our Self-isolation page has
            information on how to self-isolate, self-monitor your symptoms and
            what do if you start to feel worse or need medical care.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What are antibodies?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Antibodies help protect you from getting sick. They are proteins
            created by your immune system (i.e., the system that defends against
            infections) that float around your body and look for viruses or
            other pathogens that cause illness. When they find a virus, they
            attach to it and that signals to your body to destroy the virus
            before it has a chance to make you sick. Your body produces many
            types of antibodies but each kind will only attach to a specific
            virus. Your body has to be taught how to make the antibodies for
            each virus. It learns how to make antibodies by being exposed to the
            virus after getting sick, or by getting immunized. It may take up to
            7 to 14 days for our body to make antibodies to a new infection. For
            new viruses, like the virus that causes COVID-19, your body does not
            have the antibodies needed to protect itself. That’s why it is
            important to take precautions, like washing your hands and staying
            physically apart, to prevent getting sick.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Is there an antibody test in BC for COVID-19?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            COVID-19 is a new illness so there is not enough information yet to
            know how long or if at all, a person will be immune if they’ve
            previously been infected and developed antibodies. A strategy is
            being developed for how antibody testing will be used in BC to
            better understand how many British Columbians have been infected and
            how much protection that offers.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}
