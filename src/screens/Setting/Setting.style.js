import theme from './../../style/theme';

const styles = { 
    mainContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        // paddingTop: 50,
        // paddingBottom: 10
        // padding: 10,
    },
    settingContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    settingWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    settingWrapperText: {
        fontSize: 18,
        color: theme.Text_PRIMARY_COLOR,

    }
}

export default styles;