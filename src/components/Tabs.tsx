import { ComponentProps, PropsWithChildren, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import Button from './Button';

export function Tab(
  props: PropsWithChildren<{ tabKey: string; tabName: string }>,
) {
  return props.tabName;
}

export function Tabs(props: {
  children: React.ReactElement<ComponentProps<typeof Tab>>[];
  onTabChange?: (tabKey: string) => void;
  style: any;
}) {
  const firstTab = props.children[0];
  const [activeTabKey, setActiveTab] = useState<string>(firstTab.props.tabKey);
  const selectedTab = useMemo(() => {
    return props.children.find(child => child.props.tabKey === activeTabKey);
  }, [activeTabKey, props.children]);

  const onTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
    if (props.onTabChange) {
      props.onTabChange(tabKey);
    }
  };

  const tabs = props.children.map(tab => {
    const tabKey = tab.props.tabKey;
    return (
      <Button
        style={tabStyles}
        onPress={() => onTabChange(tabKey)}
        key={tabKey}
        disabled={tabKey === activeTabKey}>
        {tab}
      </Button>
    );
  });

  return (
    <div
      style={{
        ...styles.tabs,
        ...props.style,
      }}>
      <div style={styles.menu}>{tabs}</div>
      <div style={styles.content}>{selectedTab?.props.children}</div>
    </div>
  );
}

const styles = StyleSheet.create({
  tabs: {
    display: 'flex',
    flexDirection: 'column',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    marginBottom: 16,
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    width: '100%',
  },
});

const tabStyles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#336633',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    display: 'flex',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#336633',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 10,
    width: '50%',
  },
});
