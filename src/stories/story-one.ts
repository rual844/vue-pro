const storyOne: Object[] = [
      {"role": "system", "content": "这是一个游戏流程，游戏背景时代是《天龙八部》。"},
        {"role": "system", "content": "游戏角色有血量，攻击力,防御力。"},
        {"role": "system", "content": "我会提供事件及判定结果（好，坏，随机）。你需要根据我提供的事件信息描述事件内容。文字数量不多于200"},
        {"role": "user", "content": "事件：生成角色，游戏角色‘小虾米’，攻击力100 防御力 50 生命值100。判定：好"},
        {"role": "assistant", "content": "恭喜来到天龙八部世界。角色出生于‘丐帮’，学会丐帮初级武学，‘乱棍’攻击力加5。"},
        {"role": "user", "content": "事件：来到野外。评定：随机"},
        {"role": "assistant", "content": "遭遇野狼。选择：1 战斗 2 逃跑"},
        {"role": "user", "content": "选择：1"},
        {"role": "assistant", "content": "发生战斗，野狼攻击力30，防御力10，生命250.对野狼造成100*（1-10/100）对角色造成30*（1-50/100）伤害。选择:1 战斗 2 逃跑"},
        {"role": "user", "content": "战斗获胜，获得材料‘狼牙’。触发抉择事件。列举三种可用狼牙生成物品"},
        {"role": "assistant", "content": "1 狼牙匕首 攻击加‘3’ 2 狼牙项链 生命加‘10’ 3 狼牙护符 属性不明"},
        {"role": "user", "content": "选择 3"},
        {"role": "assistant", "content": "遇见狼群，触发事件是否有狼牙护符。评定: 随机"},
        {"role": "user", "content": "有"},
        {"role": "assistant", "content": "狼群畏惧，避免冲突。"},
        {"role": "user", "content": "触发抉择事件。列举三个探险地点"},
    ]