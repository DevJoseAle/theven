    <View style={{ width: '100%', height: '8%'}}>

        <FlatList
        style={{ width: '100%', height: '100%' }}
          horizontal

          data={allCategories}
          renderItem={({ item }) => (<CategoryItem name={item.name} />)}
          keyExtractor={item => item.id}
        />
      </View>
      <ScrollView style={{ flex: 1, height: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

          {/* Categorias */}



          {
            isLoading && <Text>Loading</Text>
          }

          {
            newEvents.map((event) => <EventCard key={event.id} event={event} />)
          }
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>