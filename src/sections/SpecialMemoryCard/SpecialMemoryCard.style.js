import theme from './../../style/theme'

const styles = {
    dairyCard: {
        backgroundColor: theme.WHITE_BACKGROUND_COLOR,
        // padding: 10,
        borderRadius: 5,
        // borderColor: theme.BORDER_RADIUS_COLOR,
        // borderWidth: 1,
        borderBottomWidth: 5, 
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        elevation: 5,
        position: 'relative',
    },
    dairyCardDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 15,
        marginBottom: 10
    },
    dairyCardDateText: {
        color: theme.Text_PRIMARY_COLOR,
        fontSize: 16
    },
    dairyCardHeader: {
        color: '#000000',
        fontSize: 20,
        marginHorizontal: 10
    },
    dairyContent: {
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 190,
        width: '100%',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    dairyContentText: {
        flexShrink: 1,
        fontSize: 15,
        color: theme.Text_PRIMARY_COLOR,
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 10
    },
    
}

export default styles;