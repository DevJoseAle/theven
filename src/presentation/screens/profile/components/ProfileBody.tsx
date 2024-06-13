import { Tab, TabView } from '@rneui/base';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { globalBackgroundColor } from '../../../../config/theme/globalStyles';
import EventCardProfile from './EventCardProfile';
import { EventTimeLineEntity } from '../../../../domain/events/eventTimeLineEntity';
import { Text } from '@rneui/themed';
import AgendaCardProfile from './AgendaCardProfile';
import CommentTile from './CommentTile';
interface Props {
    newEvents: EventTimeLineEntity[],
    getNewEvents: () => Promise<void>,
    isLoading: boolean

}
export const ProfileBody = ({ newEvents, getNewEvents, isLoading }: Props) => {
    const [index, setIndex] = useState(0);
    return (

        <>
            <View style={{ width: '100%', height: 50, backgroundColor: globalBackgroundColor }}>
                <Tab
                    value={index}
                    containerStyle={{ backgroundColor: globalBackgroundColor, height: '100%' }}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: 'white',
                        height: 1,
                    }}
                    variant="primary"
                >
                    {/* //TODO! Condicionar si es el dueño de la cuenta, no debe ver su agenda */}
                    <Tab.Item

                        title="Mis Eventos"
                        titleStyle={{ fontSize: index === 0 ? 16 : 14 }}
                        active={index === 0} />
                    <Tab.Item
                        title="Comentarios"
                        titleStyle={{ fontSize: index === 1 ? 16 : 14, width:'110%' }}
                        active={index === 1} />
                    <Tab.Item

                        title="Mi Agenda"
                        titleStyle={{ fontSize: index === 2 ? 16 : 14 }}
                        active={index === 2} />

                </Tab>


            </View>
            <TabView value={index} onChange={setIndex} animationType="spring" containerStyle={{ flex: 1, backgroundColor: globalBackgroundColor, width: '100%' }}>
                <TabView.Item style={{ backgroundColor: globalBackgroundColor, width: '100%' }}>
                    {newEvents.length === 0
                        ? <Text>No hay eventos</Text>
                        : <View>
                            <FlatList
                                onRefresh={getNewEvents}
                                refreshing={isLoading}
                                numColumns={2}
                                data={newEvents}
                                renderItem={({ item }) => <EventCardProfile event={item} />}
                                keyExtractor={item => item.id!.toString()} />
                            <View style={{ height: 140 }} />
                        </View>
                    }
                </TabView.Item>
                {/* //TODO! Condicionar si es el dueño de la cuenta, no debe ver su agenda */}
                <TabView.Item style={{ backgroundColor: globalBackgroundColor, width: '100%' }}>
                    {newEvents.length === 1
                        ? <Text>No hay eventos</Text>
                        : <View >

                        <FlatList
                            onRefresh={getNewEvents}
                            refreshing={isLoading}
                            numColumns={1}
                            data={newEvents}
                            renderItem={({ item }) => <CommentTile event={item} />}
                            keyExtractor={item => item.id!.toString()} />
                            </View>
                    }
                </TabView.Item>

                {/* //TODO! Condicionar si es el dueño de la cuenta, no debe ver su agenda */}
                <TabView.Item style={{ backgroundColor: globalBackgroundColor, width: '100%' }}>
                    {newEvents.length === 2
                        ? <Text>No hay eventos</Text>
                        : <FlatList
                            onRefresh={getNewEvents}
                            refreshing={isLoading}
                            numColumns={1}
                            data={newEvents}
                            renderItem={({ item }) => <AgendaCardProfile event={item} />}
                            keyExtractor={item => item.id!.toString()} />
                    }
                </TabView.Item>
            </TabView>
            <View style={{ height: 40 }} />
        </>
    );
};
