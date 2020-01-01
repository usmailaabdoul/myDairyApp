import theme from './../../style/theme'

const styles = {
    mainContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: theme.WHITE_BACKGROUND_COLOR
    },
    actionButtonIcon: {
        color: theme.WHITE_BACKGROUND_COLOR,
        fontSize: 25
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        // marginBottom: 5
    },
    search: {
        height: 40,
        // width: '80%',
        paddingLeft: 15,
        fontSize: 16,
        fontStyle: 'normal',
        color: theme.Text_PRIMARY_COLOR ,
        flex: 4
    },
    searchWrapper: {
        marginVertical: 5,
        backgroundColor: '#fcfbfb',
        flex: 2,
        borderRadius: 90,
        borderColor: theme.BORDER_RADIUS_COLOR,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButtonWrapper: {
        backgroundColor: theme.PRIMARY_COLOR,
        flex: 1,
        padding: 7.5, 
        borderTopRightRadius: 90,
        borderBottomRightRadius: 90,
        alignItems: 'center'
    }
    
}

export default styles