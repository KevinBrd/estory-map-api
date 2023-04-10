import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import { GetProjectDto, Project } from "../types";

const styles = StyleSheet.create({
    titre: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: "32px",
        marginBottom: "16px",
    },
    titre2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: "32px",
        marginTop: "16px",
        marginBottom: "16px",
    },
    page: {
        flexDirection: 'column',
        marginLeft: "16px",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const ProjectPdf = (project: GetProjectDto) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.titre}>{project.name}</Text>
                </View>
                <View>
                    <Text>Mail du client : {project.mail_client}</Text>
                </View>
                <View>
                    <Text>Description : {project.description}</Text>
                </View>
                <View>
                    <Text style={styles.titre2}>Acteurs</Text>
                </View>
                {project.actors.map(actor =>
                    <>
                        <View>
                            <Text>Role de l'acteur : {actor.nom_role}</Text>
                        </View>
                        { actor.attributs?.map(attribut => <Text>{"- " + Object.keys(attribut)[0] + " : " + Object.values(attribut)[0]}</Text>)}
                    </>
                )}
                <View>
                    <Text style={styles.titre2}>Flux</Text>
                </View>
                {project.fluxs.map(flux =>
                    <>
                        <View>
                            <Text>Flux : {flux.nom_flux}</Text>
                        </View>
                        { flux.acteur_emetteur && (<Text> - Acteur emetteur : {flux.acteur_emetteur.nom_role}</Text>)}
                        { flux.acteur_recepteur && (<Text> - Acteur recepteur : {flux.acteur_recepteur.nom_role}</Text>)}
                    </>
                )}
                <View>
                    <Text style={styles.titre2}>Règles de Gestion</Text>
                </View>
                {project.regles.map((regle, index) =>
                    <>
                        <View>
                            <Text>RMT-0{index+1} : {regle.description}</Text>
                        </View>
                    </>
                )}
                <View>
                    <Text style={styles.titre2}>Exigences</Text>
                </View>
                {project.exigences.filter(exigence => exigence.type == "Fonctionelle").map(
                    (exigence, index) => <>
                    <View>
                        <Text>EXF-0{index+1} : {exigence.description}</Text>
                    </View>
                </>
                )}
                {project.exigences.filter(exigence => exigence.type == "Non-Fonctionelle").map(
                    (exigence, index) => <>
                    <View>
                        <Text>EXNF-0{index+1} : {exigence.description}</Text>
                    </View>
                </>
                )}
            </Page>
        </Document>
    )
}

export default ProjectPdf;