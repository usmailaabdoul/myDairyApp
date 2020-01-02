import theme from './../../style/theme';

const styles = {
    mainCard: {
        padding: 10,
        width: '46%',
        marginRight: 15,
        marginVertical: 5,
        borderRadius: 5,
        justifyContent: 'space-between',
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4,
        position: 'relative',
    },
    reminderTitle: {
        color: theme.WHITE_BACKGROUND_COLOR,
        fontSize: 16,
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    dateText: {
        color: theme.WHITE_BACKGROUND_COLOR,
        fontSize: 14
    }
}

export default styles;