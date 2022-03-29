import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Texto from '../../componentes/texto';

import Item from './componentes/Item';
import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';


export default function Cesta({topo, detalhes, itens}) {
    return <>
        <FlatList 
                data={itens.listaItens}
                renderItem = {Item}
                keyExtractor={({nome}) => nome}
                //style={styles.lista}
                ListHeaderComponent={() => {
                    return<>
                    <Topo {... topo} />
                    <View style={styles.cesta}>
                        <Detalhes {... detalhes} />
                        <Texto style={styles.titulo}>{itens.titulo}</Texto>
                    </View>
                    </>
                }}
        />
    </>

}

const styles = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16
    },
    titulo:{
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize:20,
        lineHeight:32
    },
    lista:{
        paddingHorizontal: 16
    }
});

