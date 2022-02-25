/**
 * Basic Level Definition
 */
interface ILogicLevel {
    //Init(): void,

    OnGUI():void
    /**
     * Call On Level Start
     */
    OnStart(): void,
    /**
     * Call On Per Monobehaviour Update
     */
    OnUpdate(): void,
    OnFixedUpdate(): void,
    /**
     * Call On Level Destroy
     */
    OnDestroy(): void

    ImGUILayout():void
    ImGUIInit():void
    ImGUIDeInit():void
}

export {
    ILogicLevel
}

